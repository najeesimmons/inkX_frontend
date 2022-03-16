import { useParams } from "react-router";
import "../pieceShow.css"

const PieceShow = (props) => {

    const params = useParams()
    
    const piece = props.pieces.find(piece => piece._id === params.id)
    console.log(piece)

    const handleDelete = async () => {
        await props.deletePiece(piece._id)
    }
    if (piece) {
        return (
            <div>
                <br></br>
                <img src={piece.image} className="piece-image" alt={piece.artist} />
                <br></br>
                <h2>{piece.title}</h2>
                <p>{piece.description}</p>
                <div className="button-container">
                    <button>Update</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
    return null
};

export default PieceShow