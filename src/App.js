import "./index.scss";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import ArtistShow from "./pages/ArtistShow/ArtistShow";
import Piece from "./pages/Piece/Piece";
import PieceShow from "./pages/PieceShow/PieceShow";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login"

function App() {
  const URL = "https://backend-api.tattoodo.com/api/v2/";

  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/artist" element={<ArtistPage URL={URL} />} />
          <Route path="/artist/:username" element={<ArtistShow URL={URL} />} />
          <Route path="/piece" element={<Piece URL={URL} />} />
          <Route path="/piece/:id" element={<PieceShow URL={URL} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
