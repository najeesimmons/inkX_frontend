import { useParams } from "react-router";
import "./pieceShow.css";

const PieceShow = (props) => {
  const params = useParams();
  const piece = props.tattoos.find((tattoo) => tattoo.tattoo_id.toString() === params.id);

  if (piece) {
    return (
      <div className="piece-show-wrapper">
        <div className="piece-show-container">
          <div className="piece-show-image-container">
            <img
              src={piece.imageUrl}
              className="piece"
              alt={piece.id}

            />
          </div>
          <div className="piece-show-info">
            <p className="piece-show-artist-name">by {piece.artist.name}</p>
            <h3 className="piece-show-title">{piece.description}</h3>
            <p className="piece-description">{piece.description}</p>
            <h4>Comments</h4>
            <h5>Comments temporarily disabled.</h5>
            <div className="button-container">
              <button className="piece-show-update">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <h1>Sorry, no piece was found.</h1>;
};

export default PieceShow;
