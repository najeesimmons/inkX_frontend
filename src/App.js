import './App.css';
import { Route, Routes } from "react-router-dom";
// import { useParams } from "react-router";
import Nav from "./components/Nav";
import Artist from './pages/Artist';
import ArtistShow from './pages/ArtistShow';
import Piece from './pages/Piece';
import PieceShow from './pages/PieceShow';
import Main from "./pages/Main";
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
  const artistsUrl = "https://inkx-backend.herokuapp.com/artist"
  // pieces "database" URL
  const piecesUrl = "https://inkx-backend.herokuapp.com/piece"

  //function to fetch artists data
  const getArtists = async () => {
    
    try {
      setArtistsIsLoading(true)
      const response = await fetch(artistsUrl);
      const data = await response.json();
      setArtistsIsLoading(false)
      setArtists(data);

    } catch (error) {
      console.error(error)  
      }
  };

  //function to fetch pieces data
  const getPieces = async () => {
    
    try {
      setPiecesIsLoading(true)
      const response = await fetch(piecesUrl);
      const data = await response.json();
      setPiecesIsLoading(false)
      setPieces(data);

    } catch (error) {
      console.error(error)  
      }
  };

  // useEffect to run getArtist when component mounts
  useEffect(() => {getArtists();}, []);
  // useEffect to run getPieces when component mounts
  useEffect(() => {getPieces();}, []);

  // if isLoading for any component state is truthy, display "loading..." message
  // else state is changed and 'artists', 'pieces', etc. will include API data
  if (artistsIsLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (piecesIsLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  
  return (
      <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={ <Main/> } />
          <Route path="/artist" element={ <Artist artists={artists}/>} />
          <Route path="/artist/:id" element={ <ArtistShow artists={artists}/>} />
          <Route path="/piece" element={ <Piece pieces={pieces}/> } />
          <Route path="/piece/:id" element={ <PieceShow pieces={pieces} />} />
      </Routes>
      </div>
  );
}

export default App;