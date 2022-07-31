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
        const data = await response.json();
        const isMore = currentPage !== data?.meta?.pagination?.total_pages;
        setArtistPieces((prevPieces) => {
          if (Array.isArray(prevPieces)) {
            return [...prevPieces, ...parseArtistPieces(data.data)];
          }
          return parseArtistPieces(data.data);
        });
        setPageCounter(currentPage + 1);
        setHasMore(isMore);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    },
    [URL, username]
  );

  useEffect(() => {
    setArtistPiecesIsLoading(true);
    getArtistPieces(1);
    setArtistPiecesIsLoading(false);
  }, [getArtistPieces]);

  if (artistPiecesIsLoading && !artistPieces) {
    <span className="loader"></span>;
  }

  if (error) {
    <div>There was an error.</div>;
  }

  if (!Array.isArray(artistPieces) || artistPieces.length === 0) {
    <div style={{ textAlign: "center" }}>
      Sorry, {username} doesn't have any posts...
    </div>;
  }

  return (
    <div className="artist-profile-wrapper">
      <div className="artist-show-info-container">
        {/* optional chaining lines 94 thru 100 is a compromise as page could not
        render this informaiton bedore it was available to reference - it gave
        "cannot read properties of "artist" error */}
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

      <InfiniteScroll
        dataLength={artistPieces.length}
        next={async () => await getArtistPieces(pageCounter)}
        hasMore={hasMore}
        loader={<span className="loader"></span>}
        height={600}
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
