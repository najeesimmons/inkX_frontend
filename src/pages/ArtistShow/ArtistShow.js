import { useParams } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./artistShow.scss";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Show = ({ URL }) => {
  const [artistPieces, setArtistPieces] = useState([]);
  const [piecesIsLoading, setPiecesIsLoading] = useState(false);

  const params = useParams();
  const username = params.username;

  const parseArtistPieces = (data) => {
    return data.map((d) => {
      return {
        id: d?.id,
        description: d?.description,
        imageUrl: d?.image?.url,
        artist: {
          id: d?.artist?.id,
          name: d?.artist?.name,
          artist_image: d?.artist?.image_url,
          now_booking: d?.artist?.allow_bookings,
          availability: d?.artist?.availability,
          city: d?.shop?.address?.city,
          state: d?.shop?.address?.state,
          country: d?.shop?.address?.country,
        },
      };
    });
  };

  const getArtistPieces = useCallback(async () => {
    try {
      setPiecesIsLoading(true);
      const response = await fetch(
        `${URL}users/byusername/${username}/posts?page=1&limit=24`
      );
      const data = await response.json();
      setPiecesIsLoading(false);
      setArtistPieces(parseArtistPieces(data.data));
    } catch (error) {
      console.error(error);
    }
  }, [URL, username]);

  useEffect(() => {
    getArtistPieces();
  }, [getArtistPieces]);

  if (piecesIsLoading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(artistPieces) || artistPieces.length === 0) {
    return <div>Sorry, {username} doesn't have any posts...</div>;
  }

  return (
    <div className="artist-profile-wrapper">
      <div className="artist-show-info-container">
        <div className="artist-pic-container">
          <img
            src={artistPieces[0].artist.artist_image}
            alt={artistPieces[0].artist.id}
          />
        </div>
        <h4>{artistPieces[0].artist.city}</h4>
        <h2>{artistPieces[0].artist.name}</h2>
        <button disabled>Message</button>
        <h5>Messaging temporarily disabled.</h5>
      </div>
      <div className="artist-show-piece-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {artistPieces.map((piece) => {
            return (
              <div key={piece.id}>
                <Link to={`/piece/${piece.id}#`}>
                  <img
                    key={piece.id}
                    src={piece.imageUrl}
                    className="artist-show-profile-piece"
                    alt={piece.description}
                  />
                </Link>
              </div>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
};

export default Show;
