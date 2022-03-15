import { Link } from "react-router-dom";
import "../artist.css"

const Artist = (props) => {

    return (
      <div>
        {props.artists.map((artist) => {
          return (
            <div key={artist._id}>
              <br></br>
              <img src={artist.profile_pic} className="artist_pic" alt={artist.username} />
              <Link to={`/artist/${artist._id}`} >
              <h1>{artist.first_name}</h1>
              </Link>
            </div>
          )
        })}
      </div>
    )
};

export default Artist;