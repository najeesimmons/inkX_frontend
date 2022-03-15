import NewArtistForm from "../components/NewArtistForm";
import { Link } from "react-router-dom";
// import ArtistPieces from "..components/ArtistPieces"


const Main = (props) => {
  return (
    <div className="main-container">
        <div>
        <h1>This is the Main Page</h1>
        <br></br>
        <img src="https://media.istockphoto.com/vectors/crossed-tattoo-machines-isolated-on-white-background-design-element-vector-id934818866?k=20&m=934818866&s=612x612&w=0&h=FlUG1lKnzyZTqnvWQypV9K_0b1RmBzVkpkHvAdOU-eQ=" alt="inkX logo"/>
        </div>
        <NewArtistForm className= "form" createArtist={props.createArtist} />
        <div className="image-container">
        {props.pieces.map((piece) => {
          return (
            <div key={piece._id}>
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
    

  )
};

export default Main;