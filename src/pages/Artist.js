import { Link } from "react-router-dom";

const Artist = (props) => {

    return (
      <div>
        {props.artists.map((artist) => {
          return (
            <div key={artist._id}>
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