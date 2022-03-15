import { Link } from "react-router-dom";
import  "../piece.css"

const Piece = (props) => {

    return (
      <div className="image-container">
        {props.pieces.map((piece) => {
          return (
            <div key={piece._id}>
              <br></br>
              <Link to={`/piece/${piece._id}`} >
                <img src ={piece.image} className="piece-image" alt={piece.title} />
              </Link>
              {/* <h2>{piece.title}</h2>
              <p>{piece.date}</p> */}
              <br></br>
              
            </div>
          )
        })}
      </div>
    )
};
  
  export default Piece;