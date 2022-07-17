import { useParams } from "react-router";
import "./pieceShow.css";

const PieceShow = (pieces, deletePiece) => {
  const params = useParams();
  const {pieces : work} = pieces
  const piece = work.find((piece) => piece._id === params.id);
  

  const handleDelete = async () => {
    await deletePiece(piece._id);
  };
  if (piece) {
    return (
      <div className="piece-show-wrapper">
        <div className="piece-show-container">
          <div className="piece-show-image-container">
          <img src={piece.image} className="piece" alt={piece.artist} />
          </div>
          <div className="piece-show-info">
            <p className="piece-show-artist-name">ARTIST NAME</p>
          <h3 className="piece-show-title">{piece.title}</h3>
          <p className="piece-description">{piece.description}</p>
          <h4>Comments</h4>
          <h5>Comments temporarily disabled.</h5>
          <div className="button-container">
            <button className="piece-show-update">Update</button>
            <button type="button" onClick={handleDelete} className="piece-show-delete">
              Delete
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }

  return <h1>Sorry, no piece was found.</h1>;
};

export default PieceShow;
