import NewArtistForm from "../../components/NewArtistForm/NewArtistForm";
import { Link } from "react-router-dom";
import "./main.css";
import Slideshow from "../../components/SlideShow/Slideshow";
// import ArtistPieces from "..components/ArtistPieces"

const Main = ({createArtist, pieces}) => {
  return (
    <div className="main-container">
      <h1>ink X</h1>
      <h2 className="site-title">where artist connect to clients...</h2>
      <br></br>
      <Slideshow />
      <div className="form-and-pieces-container">
        <NewArtistForm className="form" createArtist={createArtist} />
        <div className="pieces-outer-container">
          <h2 className="main-page-title">New Posts</h2>
          <div className="pieces-inner-container">
          {pieces.slice(0,9).map((piece) => {
            return (
              <div key={piece._id} className="each-piece">
                <Link to={`/piece/${piece._id}`}>
                  <img
                    src={piece.image}
                    className="piece-image"
                    alt={piece.title}
                  />
                </Link>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
