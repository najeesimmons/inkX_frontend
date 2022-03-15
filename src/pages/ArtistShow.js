import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom"
// import ArtistPieces from "./ArtistPieces"

const Show = (props) => {
    const [pieces, setPieces] = useState (null)
    const params = useParams()
    let array = []
    const getPieces = async () => {
    
        try {
          const response = await fetch("https://inkx-backend.herokuapp.com/piece");
          const data = await response.json();
          console.log(data)
          console.log(data.artist)
          data.forEach(element => {
              console.log(element._id)
              if (element.artist === params.id) {
                  array.push(element)
              }
            
          });
          console.log(array)
          setPieces(array);
    
        } catch (error) {
          console.error(error)  
          }
      };

      useEffect(() => {getPieces()}, []);

    const artist = props.artists.find(artist => artist._id === params.id)
    console.log(artist)


    const loadedPieces = () => {
        return (
                pieces.map((piece) => (
            <div>
                <div key ={artist._id}>
                    <img src={artist.profile_pic} alt={artist.username} />
                </div>
                <div key={piece._id} className="piece">
                    <Link to={`/pieces/${piece._id}`}><h1>{piece.title}</h1></Link>
                    <img src={piece.image} alt={piece.artist} />
                    <h3>{piece.artist}</h3>
                </div>
            </div>
    ))    
        )}

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return pieces ? loadedPieces() : loading()
};

export default Show;