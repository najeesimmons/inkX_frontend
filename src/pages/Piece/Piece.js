import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./piece.scss";
import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";

const Piece = ({ URL }) => {
  const [hasMore, setHasMore] = useState(true);
  const [pieces, setPieces] = useState([]);
  const [piecesIsLoading, setPiecesIsLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(1);
  const [error, setError] = useState(false);

  const parsePieces = (data) => {
    return data.map((d) => {
      return {
        id: d?.data?.id,
        description: d?.data?.description,
        imageUrl: d?.data?.image?.url,
        artist: {
          _id: d?.data?.artist?.id,
          name: d?.data?.artist?.name,
          username: d?.data?.artist?.username,
          artist_image: d?.data?.artist?.image_url,
          artist_id: d?.data?.artist?.artist_id,
        },
        city: d?.data?.shop?.address?.city,
        country: d?.data?.shop?.address?.country,
      };
    });
  };

  const getPieces = useCallback(
    async (currentPage) => {
      try {
        const response = await fetch(
          `${URL}feeds/explore?&limit=24&page=${currentPage}`
        );
        const data = await response.json();
        const isMore = currentPage !== data?.meta?.pagination?.total_pages;
        const parsedData = parsePieces(data.data);

        return {
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
    [URL]
  );

  const getNextPageData = async (currentPage) => {
    const { isMore, data, error, nextPage } = await getPieces(currentPage);

    if (error) {
      console.error("An error occurred");
      setError(true);
      return;
    }

    setPieces((prevPieces) => [...prevPieces, ...data]);
    setPageCounter(nextPage);
    setHasMore(isMore);
  };

  useEffect(() => {
    async function fetchData() {
      setPiecesIsLoading(true);
      const { isMore, data, error, nextPage } = await getPieces(1);

      if (error) {
        console.error("An error occurred");
        setError(true);
        return;
      }
      setPieces(data);
      setPageCounter(nextPage);
      setHasMore(isMore);
      setPiecesIsLoading(false);
    }

    fetchData();
  }, [getPieces]);

  const allPieces = pieces.map((piece) => {
    return (
      <div key={piece.id}>
        <Link to={`/piece/${piece.id}#`}>
          <img src={piece.imageUrl} alt={piece.id} className="piece-pic" />
        </Link>
      </div>
    );
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    728: 2,
  };

  // if (artistsIsLoading) {
  //   return <span className="loader" />;
  // }

  // if (!artistsIsLoading && error) {
  //   return <div>There was an error.</div>;
  // }

  // if (!artistsIsLoading && artists.length === 0) {
  //   return (
  //     <div style={{ textAlign: "center" }}>Sorry, there are no artists.</div>
  //   );
  // }

  if (piecesIsLoading) {
    return <span className="loader" />;
  }

  if (!piecesIsLoading && error) {
    return <div>There was an error</div>;
  }

  if (!piecesIsLoading && pieces.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        Sorry, there are no pieces to display
      </div>
    );
  }

  return (
    <div className="pieces-wrapper">
      <h2 className="pieces-heading">Explore Tatoos</h2>
      <InfiniteScroll
        dataLength={pieces.length}
        next={async () => await getNextPageData(pageCounter)}
        hasMore={hasMore}
        loader={<span className="loader"></span>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {allPieces}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};

export default Piece;
