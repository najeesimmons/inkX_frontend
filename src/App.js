import "./index.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Artist from "./pages/Artist/Artist";
import ArtistShow from "./pages/ArtistShow/ArtistShow";
import Piece from "./pages/Piece/Piece";
import PieceShow from "./pages/PieceShow/PieceShow";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";

function App() {
  const [tattoos, setTattoos] = useState([]);
  const [tattoosLoading, setTattoosLoading] = useState(false);

  const tattoosUrl =
    "https://backend-api.tattoodo.com/api/v2/feeds/explore?seed=4&limit=100&page=2";

  const URL = "https://backend-api.tattoodo.com/api/v2/";

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

  if (tattoosLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/artist" element={<Artist URL={URL} />} />
          <Route path="/artist/:username" element={<ArtistShow URL={URL} />} />
          <Route path="/piece" element={<Piece tattoos={tattoos} />} />
          <Route path="/piece/:id" element={<PieceShow tattoos={tattoos} URL={URL}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
