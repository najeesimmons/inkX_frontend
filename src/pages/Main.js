import NewArtistForm from "../components/NewArtistForm";
import { Link } from "react-router-dom";
import "../main.css"
// import ArtistPieces from "..components/ArtistPieces"


const Main = (props) => {
  return (
    <div className="main-container">
        <div className="header-container">
        <h1>inkX</h1>
        <h2>where artist connect to customers...</h2>
        <br></br>
        <img src="https://media.istockphoto.com/photos/body-art-picture-id901179606?k=20&m=901179606&s=612x612&w=0&h=MRk52XcmzBHpT7LTYo0iwfAj25HhaPCKLlSo33PuTpY=" className="header-image" alt="inkX logo"/>
        </div>
        <div className="form-and-pieces-container">
          <NewArtistForm className= "form" createArtist={props.createArtist} />
          <div className="pieces-container">
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