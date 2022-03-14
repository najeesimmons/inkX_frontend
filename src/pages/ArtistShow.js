import { useParams } from "react-router";

const Show = (props) => {

    const params = useParams()

    const artist = props.artists.find(artist => artist._id === params.id)
    console.log(artist)
    if (artist) {
        return (
            <div>
                <div>
                <h1>{artist.first_name}</ h1>
                <img src={artist.profile_pic} alt="profile"/>
                </div>
                
                <div>
                    
                </div>
            </div>
        )
    }
    return null
};

export default Show;