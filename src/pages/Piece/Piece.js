import { Link } from "react-router-dom";
import "./piece.scss";
import Masonry from "react-masonry-css";

const Piece = ({ tattoos }) => {
  const allPieces = tattoos.map((tattoo) => {
    return (
      <div key={tattoo.tattoo_id}>
        <Link to={`/piece/${tattoo.tattoo_id}#`}>
          <img
            src={tattoo.imageUrl}
            alt={tattoo.tattoo_id}
            className="piece-pic"
          />
        </Link>
      </div>
    );
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="pieces-wrapper">
      <h2 className="pieces-heading">Explore Tatoos</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allPieces}
      </Masonry>
    </div>
  );
};

export default Piece;
