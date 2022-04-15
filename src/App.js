import "./index.css";
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
  // We will use the Route component to specify each route

  //state to hold the artist list data
  const [artists, setArtists] = useState([]);
  const [artistsIsLoading, setArtistsIsLoading] = useState(false);

  //state to hold piece list data
  const [pieces, setPieces] = useState([]);
  const [piecesIsLoading, setPiecesIsLoading] = useState(false);

  // artists "database" URL
  const artistsUrl = "https://inkx-backend.herokuapp.com/artist";
  // pieces "database" URL
  const piecesUrl = "https://inkx-backend.herokuapp.com/piece";

  //function to fetch artists data
  const getArtists = async () => {
    try {
      setArtistsIsLoading(true);
      const response = await fetch(artistsUrl);
      const data = await response.json();
      setArtistsIsLoading(false);
      setArtists(data);
    } catch (error) {
      console.error(error);
    }
  };

  //function to create artist
  const createArtist = async (artist) => {
    // make post request to create artist
    await fetch(artistsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artist),
    });
    // update list of artists
    getArtists();
  };

  useEffect(() => getArtists(), []);

  //function to fetch pieces data
  const getPieces = async () => {
    try {
      setPiecesIsLoading(true);
      const response = await fetch(piecesUrl);
      const data = await response.json();
      setPiecesIsLoading(false);
      setPieces(data);
    } catch (error) {
      console.error(error);
    }
  };

  // function to delete pieces
  const deletePiece = async (id) => {
    console.log({ id });
    try {
      // make delete request to delete pieces
      await fetch(piecesUrl + `/${id}`, {
        method: "delete",
      });
      // update list of pieces
      getPieces();
    } catch (error) {}
  };

  // useEffect to run getArtist when component mounts
  useEffect(() => {
    getArtists();
  }, []);
  // useEffect to run getPieces when component mounts
  useEffect(() => {
    getPieces();
  }, []);

  // if isLoading for any component state is truthy, display "loading..." message
  // else state is changed and 'artists', 'pieces', etc. will include API data
  if (artistsIsLoading && piecesIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={ <><Main/><Form/></>} /> */}
          <Route
            exact
            path="/"
            element={<Main createArtist={createArtist} pieces={pieces} />}
          />
          {/* <Route exact path="/" element={ <Main />} /> */}
          <Route path="/artist" element={<Artist artists={artists} />} />
          <Route
            path="/artist/:id"
            element={<ArtistShow artists={artists} pieces={pieces} />}
          />
          <Route path="/piece" element={<Piece pieces={pieces} />} />
          <Route
            path="/piece/:id"
            element={<PieceShow pieces={pieces} deletePiece={deletePiece} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
