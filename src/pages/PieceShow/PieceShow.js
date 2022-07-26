import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
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
        username: data?.artist?.name,
        artist_image: data?.artist?.imageUrl,
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
    return <h1>...Loading</h1>;
  }

  if (!tattoo) {
    return <h1>Sorry, no piece was found.</h1>;
  }

  return (
    <div className="piece-show-wrapper">
      <div className="piece-show-container">
        <div className="piece-show-image-container">
          <img src={tattoo.imageUrl} className="piece" alt={tattoo.id} />
        </div>
        <div className="piece-show-info">
          {<p className="piece-show-artist-name">by {tattoo.artist.name}</p>}
          <p className="tattoo-description">{tattoo.description}</p>
          <h4>Comments</h4>
          <h5>Comments temporarily disabled.</h5>
          <div className="button-container">
            <button className="piece-show-update">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieceShow;
