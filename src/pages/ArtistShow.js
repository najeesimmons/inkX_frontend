import { useParams } from "react-router";
// import ArtistPieces from "./ArtistPieces"

const Show = (props) => {

    const params = useParams()

    const artist = props.artists.find(artist => artist._id === params.id)

    // const pieces = props.pieces.find(piece => piece.artist === params.id)

    if (artist) {
        return (
            <div>
                <div>
                    <h1>{artist.first_name}</ h1>
                    <img src={artist.profile_pic} alt="profile"/>
                </div>
                <br></br>
                <div>
                    {/* <ArtistPieces></ArtistPieces> */}
                </div>
            </div>
        )
    }
    return null
};

export default Show;