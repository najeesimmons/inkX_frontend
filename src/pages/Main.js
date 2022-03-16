import NewArtistForm from "../components/NewArtistForm";
import { Link } from "react-router-dom";
import "../main.css"
import Slideshow from "../components/Slideshow";
// import ArtistPieces from "..components/ArtistPieces"


const Main = (props) => {
  return (
    <div className="main-container">
        <h1>inkX</h1>
        <h2 className="site-title">where artist connect to customers...</h2>
        <br></br>
        <Slideshow/>
        <div className="form-and-pieces-container">
          <NewArtistForm className= "form" createArtist={props.createArtist} />
          <div className="pieces-container">
          <h1>New Posts</h1>
          {props.pieces.map((piece) => {
          return (
            <div key={piece._id} className="each-piece">
              <br></br>
              <Link to={`/piece/${piece._id}`} >
                <img src ={piece.image} className="piece-image" alt={piece.title} />
              </Link>
              <br></br>
            </div>
          )
        })}
        </div>
      </div>  
    </div>
    

  )
};

export default Main;