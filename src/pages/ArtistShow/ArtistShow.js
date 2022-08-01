import { useParams } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./artistShow.scss";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const ArtistShow = ({ URL }) => {
  const [hasMore, setHasMore] = useState(true);
  const [artistPieces, setArtistPieces] = useState([]);
  const [artistPiecesIsLoading, setArtistPiecesIsLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(1);
  const [error, setError] = useState(false);
  const params = useParams();
  const username = params.username;

  const parseArtistPieces = (data) => {
    return data.map((d) => {
      return {
        id: d?.id,
        description: d?.description,
        imageUrl: d?.image?.url,
        artist: {
          id: d?.artist?.id,
          name: d?.artist?.name,
          artist_image: d?.artist?.image_url,
          now_booking: d?.artist?.allow_bookings,
          availability: d?.artist?.availability,
          city: d?.shop?.address?.city,
          state: d?.shop?.address?.state,
          country: d?.shop?.address?.country,
        },
      };
    });
  };

  const getArtistPieces = useCallback(
    async (currentPage) => {
      try {
        const response = await fetch(
          `${URL}users/byusername/${username}/posts?page=${currentPage}&limit=24`
        );
        const data = await response.json(); // object
        const isMore = currentPage !== data?.meta?.pagination?.total_pages; // boolean
        const parsedData = parseArtistPieces(data.data); // array with parsed properties

        return {
          // getArtistPieces returns an object with properties using vars defined in funciton
          isMore,
          data: parsedData,
          error: false,
          nextPage: currentPage + 1,
        };
      } catch (error) {
        return {
          isMore: false,
          data: [],
          error: true,
          nextPage: currentPage + 1,
        };
      }
    },
    [URL, username]
  );

  const getNextPageData = async (currentPage) => {
    const { isMore, data, error, nextPage } = await getArtistPieces(
      currentPage
    );

    if (error) {
      console.error("An error occurred");
      setError(true);
      return;
    }

    setArtistPieces((prevPieces) => [...prevPieces, ...data]);
    setPageCounter(nextPage);
    setHasMore(isMore);
  };

  useEffect(() => {
    async function fetchData() {
      setArtistPiecesIsLoading(true); // set loading state to true
      const { isMore, data, error, nextPage } = await getArtistPieces(1); // call getArtistPieces, then
      // create variables by destructuring object which it returns, vars have same name as properties

      if (error) {
        console.error("An error occurred");
        setError(true);
        return;
      }

      setArtistPieces(data); // set artistPieces state to the data var (derived from getArtistPieces obj)
      setPageCounter(nextPage); // set nextPage state to the nextPage var (derived from getArtistPieces obj)
      setHasMore(isMore); // set isMore state to the data var (derived from getArtistPieces obj)
      setArtistPiecesIsLoading(false); // set loading state to false
    }

    fetchData(); // calling function in useEffect
  }, [getArtistPieces]); // useEffect will be called again if getArtistPieces called

  if (artistPiecesIsLoading) {
    return <span className="loader" />;
  }

  if (!artistPiecesIsLoading && error) {
    return <div>There was an error.</div>;
  }

  if (!artistPiecesIsLoading && artistPieces.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        Sorry, {username} doesn't have any posts...
      </div>
    );
  }

  const renderArtistInformation = () => {
    if (!artistPieces[0]) return null;

    return (
      <div className="artist-show-info-container">
        <div className="artist-pic-container">
          <img
            src={artistPieces[0]?.artist?.artist_image}
            alt={artistPieces[0]?.artist?.id}
          />
        </div>
        <h4>{artistPieces[0]?.artist?.city}</h4>
        <h2>{artistPieces[0]?.artist?.name}</h2>
        <button disabled>Message</button>
        <h5>Messaging temporarily disabled.</h5>
      </div>
    );
  };

  return (
    <div className="artist-profile-wrapper">
      {renderArtistInformation()}
      <InfiniteScroll
        dataLength={artistPieces.length}
        next={async () => await getNextPageData(pageCounter)}
        loader={<span className="loader"></span>}
        height={600}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="artist-show-piece-container"
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="artist-show-my-masonry-grid"
          columnClassName="artist-show-my-masonry-grid_column"
        >
          {artistPieces.map((piece) => {
            return (
              <div key={piece.id}>
                <Link to={`/piece/${piece.id}#`}>
                  <img
                    key={piece.id}
                    src={piece.imageUrl}
                    className="artist-show-profile-piece"
                    alt={piece.description}
                  />
                </Link>
              </div>
            );
          })}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default ArtistShow;
