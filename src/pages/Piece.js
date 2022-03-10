import { Link } from "react-router-dom";

const Piece = (props) => {

    return (
      <div>
        {props.pieces.map((piece) => {
          return (
            <div key={piece._id}>
              <Link to={`/piece/${piece._id}`} >
                <img src={piece.image} alt={piece.artist} />
              </Link>
              <h2>{piece.title}</h2>
              <p>{piece.date}</p>
              <p>{piece.description}</p>
              <br></br>
              
            </div>
          )
        })}
      </div>
    )
};
  
  export default Piece;