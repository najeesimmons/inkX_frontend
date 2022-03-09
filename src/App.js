import './App.css';
import { Route, Routes } from "react-router-dom";
// import { useParams } from "react-router";
import Nav from "./components/Nav";
import Artist from './pages/Artist';
import Show from './pages/Show';
import Main from "./pages/Main";

function App() {
  // We will use the Route component to specify each route
  return (
      <div className="App">
      <Nav />
      <Routes>
          <Route exact path="/" element={ <Main/> } />
          <Route path="/artist" element={ <Artist/>} />
          <Route path="/artist/:id" element={ <Show/>} />
      </Routes>
      </div>
  );
}

export default App;