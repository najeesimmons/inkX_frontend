import { useParams } from "react-router";

const Show = (props) => {

    const params = useParams()

    const artist = props.artists.find(artist => artist._id === params.id)
    console.log(artist)
    if (artist) {
        return (
            <div>
               {artist.password}
            </div>
        )
    }
    return null
};

export default Show;