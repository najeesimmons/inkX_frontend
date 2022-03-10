import { Link } from "react-router-dom";

const Piece = (props) => {

    return (
      <div>
        {props.pieces.map((piece) => {
          return (
            <div key={piece._id}>
              {/* <Link to={`/artist/${artist._id}`} > */}
              <img src={piece.image} alt={piece.artist} />
              <p>{piece.date}</p>
              <p>{piece.artist}</p>
              <p>{piece.description}</p>
              <br></br>
              {/* </Link> */}
            </div>
          )
        })}
      </div>
    )
};
  
  export default Piece;