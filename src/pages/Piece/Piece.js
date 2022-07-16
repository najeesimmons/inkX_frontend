import { Link } from "react-router-dom";
import "./piece.css";

const Piece = (props) => {
  return (
    <div className="pieces-wrapper">
    <h2 className="pieces-heading">Explore Tatoos</h2>
    <div className="pieces-container">
      {props.pieces.map((piece) => {
        return (
          <div key={piece._id} className="piece-card">
            <Link to={`/piece/${piece._id}`}>
              <img src={piece.image} alt={piece.title} className="piece-pic" />
            </Link>
            {/* <div className="piece-info-container">
              <h4>
                <b></b>
                <p className="artist-location"></p>

              </h4>
            </div> */}
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Piece;

{/* <div key={piece._id}>
  <Link to={`/piece/${piece._id}`}>
    <img src={piece.image} className="piece" alt={piece.title} />
  </Link>
</div>; */}
