import { useParams } from "react-router";
import "../artistShow.css"

// import ArtistPieces from "./ArtistPieces"

const Show = (props) => {
   
    const params = useParams()
    
    const artist = props.artists.find(artist => artist._id === params.id)
    if (!artist) {
        return null
    }

    const pieces = props.pieces.filter(piece => piece.artist === artist._id)

    return(
        <div>
            <img src={artist.profile_pic} alt ={artist.username}/>
            <h2>{artist.username}</h2>
            {pieces && <div>
                {pieces.map(piece => {
                    return (
                        <div key={piece._id}>
                            <img src={piece.image} className="piece-image" alt={piece.title} />
                        </div>    
                    )
                })} 
            </div> }
        </div>
    )
};

export default Show;