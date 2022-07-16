import { Link } from "react-router-dom";
import "./piece.css";
import Masonry from "react-masonry-css";


const Piece = ({ pieces }) => {
  const allPieces = pieces.map((piece) => {
    return (
      <div key={piece._id}>
        <Link to={`/piece/${piece._id}`}>
        <img src={piece.image} alt={piece.title} className="piece-pic" />
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

// <div className="pieces-container">
// {pieces.map((piece) => {
//   return (
//     <div key={piece._id} className="piece-card">
//       <Link to={`/piece/${piece._id}`}>
//         <img src={piece.image} alt={piece.title} className="piece-pic" />
//       </Link>
//       <div className="piece-info-container">
//         <h4>
//           <b></b>
//           <p className="artist-location"></p>

//         </h4>
//       </div>
//     </div>
//   );
// })}
// </div>
