import { Link } from "react-router-dom";
import "../artist.css";

const Artist = (props) => {
  return (
    <div>
      {props.artists.map((artist) => {
        return (
          <div key={artist._id}>
            <br />
            <Link to={`/artist/${artist._id}`}>
              <img
                src={artist.profile_pic}
                className="artist_pic"
                alt={artist.username}
              />
              <h3>{artist.username}</h3>
            </Link>
            <h3>
              {artist.city}, {artist.state}
            </h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Artist;
