import { Link } from "react-router-dom";
import "./artist.css";

const Artist = (props) => {
  return (
    <div className="artist-wrapper">
      <h2 className="artist-heading">Find Artists</h2>
      <div className="artist-container">
        {props.artists.map((artist) => {
          return (
            <div key={artist._id} className="artist-card">
              <Link to={`/artist/${artist._id}`}>
                <img
                  src={artist.profile_pic}
                  alt={artist.username}
                  className="artist_pic"
                />
              </Link>

              <div className="artist-info-container">
                <h4>
                  <b>{artist.username}</b>
                  <p className="artist-location">
                    {artist.city}, {artist.state}
                  </p>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artist;

