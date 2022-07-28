import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./artist.scss";
import InfiniteScroll from "react-infinite-scroll-component";

const Artist = ({ URL }) => {
  const [hasMore, setHasMore] = useState(true);
  const [artists, setArtists] = useState([]);
  const [artistsIsLoading, setArtistsIsLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(1);

  const parseArtists = (data) =>
    data.map((d) => {
      return {
        _id: d?.user_id,
        name: d?.name,
        username: d?.username,
        imageUrl: d?.image_url,
        portfolio: d?.portfolio_preview,
        location: {
          shop_name: d?.current_shop?.name,
          zip_code: d?.current_shop?.address?.zip_code,
          city: d?.current_shop?.address?.city,
          state: d?.current_shop?.address?.state,
          country: d?.current_shop?.address?.country,
          latitude: d?.location?.latitude,
          longitude: d?.location?.longitude,
          allow_bookings: d?.allow_bookings,
          availability: d?.availability,
        },
      };
    });

  const getArtists = useCallback(
    async (currentPage) => {
      try {
        const response = await fetch(
          `${URL}search/artists/bookable?&page=${currentPage}&limit=24`
        );
        const data = await response.json();
        const isMore = data.length !== 24;
        setArtists((prevArtists) => [
          ...prevArtists,
          ...parseArtists(data.data),
        ]);
        setPageCounter(currentPage + 1);
        setHasMore(isMore);
      } catch (error) {
        console.error(error);
      }
    },
    [URL]
  );

  useEffect(() => {
    setArtistsIsLoading(true);
    getArtists(1);
    setArtistsIsLoading(false);
  }, [getArtists]);

  if (artistsIsLoading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div className="artist-wrapper">
      <h2 className="artist-heading">Find Artists</h2>

      <InfiniteScroll
        dataLength={artists.length}
        next={async () => await getArtists(pageCounter)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        className="artist-container"
      >
        {artists.map((artist) => {
          return (
            <Link
              key={`${artist._id} + cardlink`}
              to={`/artist/${artist.username}#`}
            >
              <div
                key={`${artist._id} + ${artist.username}`}
                className="artist-card"
              >
                <img
                  src={artist.imageUrl}
                  alt={artist.username}
                  className="artist_pic"
                />

                <div className="artist-info-container">
                  <h4>
                    <b>{artist.name}</b>
                    <p className="artist-location">{artist.location.city}</p>
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Artist;
