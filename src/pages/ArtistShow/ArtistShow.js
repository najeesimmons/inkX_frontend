import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./artistShow.css";
import Masonry from "react-masonry-css";

const Show = ({ artists, tattoos }) => {
  const params = useParams();

  const artist = artists.find((artist) => artist._id.toString() === params.id);
  if (!artist) {
    return null;
  }

  // const artistPieces = tattoos.filter((tattoo) => tattoo.artist.artist_id === artist._id);
  const artistPieces = artist.portfolio
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
          src={artist.imageUrl}
          className="artist-pic"
          alt={artist.name}
        />
        <h4 className="artist-show-location">{artist.location.city}, {artist.location.state}</h4>
        <h2>{artist.name}</h2>
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
                <div key={piece.id}>
                  <Link to={`/piece/${piece.id}`}>
                  <img
                    key={piece.id}
                    src={piece.image.url}
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
