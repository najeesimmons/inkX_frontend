// import { Link } from "react-router-dom";
import "./artist.css";

const Artist = ({artists}) => {
  console.log("artists", artists)
  return (
    <div className="artist-wrapper">
      <h2 className="artist-heading">Find Artists</h2>
      <div className="artist-container">
        {artists.map((artist) => {
          return (
            <div key={artist._id} className="artist-card">
              {/* <Link to={`/artist/${artist._id}`}> */}
                <img
                  src={artist.imageUrl}
                  alt={artist.username}
                  className="artist_pic"
                />
              {/* </Link> */}

              <div className="artist-info-container">
                <h4>
                  <b>{artist.name}</b>
                  <p className="artist-location">
                    {artist.location.city}, {artist.location.state}
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

