import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { useParams } from "react-router";
import Nav from "./components/Nav/Nav";
import Artist from "./pages/Artist/Artist";
import ArtistShow from "./pages/ArtistShow/ArtistShow";
import Piece from "./pages/Piece/Piece";
import PieceShow from "./pages/PieceShow/PieceShow";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";

function App() {

  const [artists, setArtists] = useState([]);
  const [artistsIsLoading, setArtistsIsLoading] = useState(false);

  const [tattoos, setTattoos] = useState([]);
  const [tattoosLoading, setTattoosLoading] = useState(false);

  // artists "database" URL
  const artistsUrl =
    "https://backend-api.tattoodo.com/api/v2/search/artists/bookable?lat=40.7135&lon=-73.3546&page=1&limit=100";
  // pieces "database" URL
  const tattoosUrl =
    "https://backend-api.tattoodo.com/api/v2/feeds/explore?seed=4&limit=100&page=2";

  const parseArtists = (data) =>
    data.map((d) => {
      return {
        _id: d?.user_id,
        name: d?.name,
        username: d?.username,
        imageUrl: d?.image_url,
        portfolio: d?.portfolio_preview,
        location: {
          zip_code: d?.current_shop?.address?.zip_code,
          city: d?.current_shop?.address?.city,
          state: d?.current_shop?.address?.state,
          country: d?.current_shop?.address?.country,
        }
      };
    });

  const parseTattoos = (data) =>
    data.map((d) => {
      return {
        tattoo_id: d.data?.id,
        description: d.data?.description,
        imageUrl: d.data?.image?.url,
        artist: {
          artist_id: d.data?.artist?.artist_id,

          artist_image: d.data?.uploader?.image_url,
          name: d.data?.artist?.name,
        },
      };
    });


  // useEffect to run getArtist when component mounts
  useEffect(() => {
    const getArtists = async () => {
      try {
        setArtistsIsLoading(true);
        const response = await fetch(artistsUrl);
        const data = await response.json();
        setArtistsIsLoading(false);
        setArtists(parseArtists(data.data));
      } catch (error) {
        console.error(error);
      }
    };
    getArtists();
  }, []);
  
  
  // useEffect to run getPieces when component mounts
  useEffect(() => {
    const getTattoos = async () => {
      try {
        setTattoosLoading(true);
        const response = await fetch(tattoosUrl);
        const data = await response.json();
        setTattoosLoading(false);
        setTattoos(parseTattoos(data.data));
      } catch (error) {
        console.error(error);
      }
    };
    getTattoos();
  }, []);

  // if isLoading for any component state is truthy, display "loading..." message
  // else state is changed and 'artists', 'pieces', etc. will include API data
  if (artistsIsLoading && tattoosLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={ <><Main/><Form/></>} /> */}
          <Route exact path="/" element={<Main />} />
          {/* <Route exact path="/" element={ <Main />} /> */}
          <Route path="/artist" element={<Artist artists={artists} />} />
          <Route
            path="/artist/:id"
            element={<ArtistShow artists={artists} tattoos={tattoos} />}
          />
          <Route path="/piece" element={<Piece tattoos={tattoos} />} />
          <Route path="/piece/:id" element={<PieceShow tattoos={tattoos} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
