import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./pieceShow.scss";

const PieceShow = (props) => {
  const params = useParams();
  const tattoo_id = params.id;

  const [tattoo, setTattoo] = useState(null);
  const [tattooIsLoading, setTattooIsLoading] = useState(false);

  const parseTattoo = (data) => {
    return {
      id: data?.id,
      description: data?.description,
      imageUrl: data?.image?.url,
      artist: {
        id: data?.artist?.id,
        name: data?.artist?.name,
        username: data?.artist?.username,
        artist_image: data?.artist?.image_url,
        allow_bookings: data?.artist?.allow_bookings,
        availability: data?.artist?.availability,
      },
      location: {
        city: data?.shop?.city,
        state: data?.shop?.state,
        country: data?.shop?.country,
      },
    };
  };

  const getTattoo = useCallback(async () => {
    try {
      setTattooIsLoading(true);
      const response = await fetch(`${props.URL}posts/${tattoo_id}`);
      const data = await response.json();
      setTattoo(parseTattoo(data.data));
      setTattooIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [props.URL, tattoo_id]);

  useEffect(() => {
    getTattoo();
  }, [getTattoo]);

  if (tattooIsLoading) {
    return <span className="loader"></span>;
  }

  if (!tattoo) {
    return <h1 style={{ textAlign: "center" }}>Sorry, no piece was found.</h1>;
  }

  return (
    <div className="piece-show-wrapper">
      <div className="piece-show-container">
        <div className="piece-show-image-container">
          <img src={tattoo.imageUrl} className="piece" alt={tattoo.id} />
        </div>
        <div className="piece-show-info">
          {tattoo.artist.username ? (
            <div className="piece-show-links-and-info">
              <Link
                to={`/artist/${tattoo.artist.username}`}
                className="link-to-artist-show"
              >
                <img
                  src={tattoo.artist.artist_image}
                  alt={tattoo.description}
                ></img>
              </Link>
              <Link
                to={`/artist/${tattoo.artist.username}`}
                className="link-to-artist-show"
              >
                <p className="piece-show-artist-name">{tattoo.artist.name}</p>
              </Link>
            </div>
          ) : (
            <div className="piece-show-links-and-info">
              <img
                src={"https://i.imgur.com/GRRAOBY.png"}
                alt={"unknown user"}
              ></img>
              <p className="piece-show-artist-name">Unknown User</p>
            </div>
          )}

          <p className="tattoo-description">{tattoo.description}</p>
          <h4>Comments</h4>
          <h5>Comments temporarily disabled.</h5>
          <div className="button-container">
            <button className="piece-show-comment" disabled>
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieceShow;
