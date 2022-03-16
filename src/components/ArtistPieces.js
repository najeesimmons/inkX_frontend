import { useParams } from "react-router";

const ArtistPieces = (props) => {
    
    const params = useParams()

    const artistPieces = props.pieces.find(piece => piece.artist === params.id)

    console.log(artistPieces)
    
    if (artistPieces) {
        return (
            {artistPieces.map((piece) => {
                return (
                    <h1>{piece.title}</h1>
                )
            })
    return null
};

export default ArtistPieces;