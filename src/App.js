import './App.css';
import { Route, Routes } from "react-router-dom";
// import { useParams } from "react-router";
import Nav from "./components/Nav";
import Artist from './pages/Artist';
import ArtistShow from './pages/ArtistShow';
import Main from "./pages/Main";
import { useState, useEffect } from "react";

function App() {
  // We will use the Route component to specify each route
  //state to hold the artist list data
  const [artists, setArtists] = useState([]);
  const [artistIsLoading, setArtistIsLoading] = useState(false);
  
  // "database" URL
  const artistUrl = "https://inkx-backend.herokuapp.com/artist"

  //function to fetch artist data
  const getArtists = async () => {
    
    try {
      setArtistIsLoading(true)
      const response = await fetch(artistUrl);
      const data = await response.json();
      setArtistIsLoading(false)
      setArtists(data);

    } catch (error) {
      console.error(error)  
      }
  };

  // useEffect to run getArtist when component mounts
  useEffect(() => {
      getArtists();
  }, []);

  // if isLoading is truthy, display "loading..." message
  // else state is changed and 'artists' will include API data
  if (artistIsLoading) {
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
          <Route path="/piece" />
          <Route path="/piece/:id" />
      </Routes>
      </div>
  );
}

export default App;