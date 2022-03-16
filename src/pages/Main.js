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
        <img src="https://urbanmatter.com/wp-content/uploads/2020/05/shutterstock_646327681-scaled.jpg" className="header-image" alt="inkX logo"/>
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