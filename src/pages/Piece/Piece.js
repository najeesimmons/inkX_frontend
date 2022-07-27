// import { useEffect } from "react";
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
        const isMore = data.length !== 24;
        setPieces((prevPieces) => [...prevPieces, ...parsePieces(data.data)]);
        setPageCounter(currentPage + 1);
        setHasMore(isMore);
      } catch (error) {
        console.error(error);
      }
    },
    [URL]
  );

  useEffect(() => {
    setPiecesIsLoading(true);
    getPieces(1);
    setPiecesIsLoading(false);
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
    500: 2,
  };

  if (piecesIsLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="pieces-wrapper">
      <h2 className="pieces-heading">Explore Tatoos</h2>
      <InfiniteScroll
        dataLength={pieces.length}
        next={async () => await getPieces(pageCounter)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
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
