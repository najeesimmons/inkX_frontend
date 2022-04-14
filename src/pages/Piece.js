import { Link } from "react-router-dom";
import "../piece.css";

const Piece = (props) => {
  return (
    <div className="image-container">
      {props.pieces.map((piece) => {
        return (
          <div key={piece._id}>
            <br></br>
            <Link to={`/piece/${piece._id}`}>
              <img src={piece.image} className="piece" alt={piece.title} />
            </Link>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default Piece;
