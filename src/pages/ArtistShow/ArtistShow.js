import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./artistShow.css";
import Masonry from "react-masonry-css";

const Show = ({ artists, pieces }) => {
  const params = useParams();

  const artist = artists.find((artist) => artist._id === params.id);
  if (!artist) {
    return null;
  }

  const artistPieces = pieces.filter((piece) => piece.artist === artist._id);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="artist-profile-wrapper">
      <div className="artist-show-info-container">
        <img
          src={artist.profile_pic}
          className="artist-pic"
          alt={artist.username}
        />
        <h4 className="artist-show-location">{artist.city}, {artist.state}</h4>
        <h2>{artist.username}</h2>"{artist.bio}."
        <button>Message</button>
        <h5>Messaging temporarily disabled.</h5>
      </div>
      {artistPieces && (
        <div className="artist-show-piece-container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {artistPieces.map((piece) => {
              return (
                <div key={piece._id}>
                  <Link to={`/piece/${piece._id}`}>
                  <img
                    key={piece._id}
                    src={piece.image}
                    className="artist-show-profile-piece"
                    alt={piece.title}
                  />
                  </Link>
                </div>
              );
            })}
          </Masonry>
        </div>
      )}
    </div>
  );
};

export default Show;
