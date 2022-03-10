import './App.css';
import { Route, Routes } from "react-router-dom";
// import { useParams } from "react-router";
import Nav from "./components/Nav";
import Artist from './pages/Artist';
import Show from './pages/Show';
import Main from "./pages/Main";
import { useState, useEffect } from "react";

function App() {
  // We will use the Route component to specify each route
  //state to hold the artist list data
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // "database" URL
  const url = "https://inkx-backend.herokuapp.com/artist"

  //function to fetch artist data
  const getArtists = async () => {
    
    try {
      setIsLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false)
      setArtists(data);

    } catch (error) {
      console.error(error)  
      }
  };

  // useEffect to run getArtist when component mounts
  useEffect(() => {
      getArtists();
  }, []);

  if (isLoading) {
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
          <Route path="/artist/:id" element={ <Show artists={artists}/>} />
      </Routes>
      </div>
  );
}

export default App;