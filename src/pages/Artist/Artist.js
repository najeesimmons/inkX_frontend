import { Link } from "react-router-dom";
import "./artist.css";

const Artist = (props) => {
  return (
    <div className="artist-container">
      {props.artists.map((artist) => {
        return (
          <div key={artist._id} className="artist-card">
            <Link to={`/artist/${artist._id}`}>
            <img src={artist.profile_pic} alt={artist.username} className="artist_pic" />
            </Link>
            <div className="artist-info-container">
              <h4>
                <b>{artist.username}</b>
                <p className="artist-location">{artist.city}, {artist.state}</p>
              </h4>
            </div>
          
          </div>
        );
      })}
    </div>
  );
};

export default Artist;
// <div key={artist._id}>
//   <br />
//   <Link to={`/artist/${artist._id}`}>
//     <img
//       src={artist.profile_pic}
//       className="artist_pic"
//       alt={artist.username}
//     />
//     <h3 className="artist-name">{artist.username}</h3>
//   </Link>
//   <h3 className="artist-location">
//     {artist.city}, {artist.state}
//   </h3>
// </div>
