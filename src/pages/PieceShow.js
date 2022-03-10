import { useParams } from "react-router";

const PieceShow = (props) => {

    const params = useParams()
    
    const piece = props.pieces.find(piece => piece._id === params.id)
    console.log(piece)
    if (piece) {
        return (
            <div>
                <img src={piece.image} alt={piece.artist} />
                <br></br>
                <h1>{piece.description}</h1>
            </div>
        )
    }
    return null
};

export default PieceShow