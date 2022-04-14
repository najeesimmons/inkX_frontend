import { useParams } from "react-router";
import "./artistShow.css"


const Show = (props) => {
   
    const params = useParams()
    
    const artist = props.artists.find(artist => artist._id === params.id)
    if (!artist) {
        return null
    }

    const pieces = props.pieces.filter(piece => piece.artist === artist._id)

    return(
        <div>
            <br></br>
            <div>
            <img src={artist.profile_pic} className="artist-pic" alt ={artist.username}/>
            </div>
            <br></br>
            <div>
            <h2>{artist.username}</h2>
                "{artist.bio}."
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            {pieces && <div className="piece-container">
                {pieces.map(piece => {
                    return (
                        <div key={piece._id}>
                            <img src={piece.image} className="piece" alt={piece.title} />
                        </div>    
                    )
                })} 
            </div> }
        </div>
    )
};

export default Show;