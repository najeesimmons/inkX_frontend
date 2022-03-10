import { useState, useEffect } from "react";

const Artist = (props) => {
    //state to hold the artist list data
    const [artists, setArtists] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // "database" URL
    const url = "https://inkx-backend.herokuapp.com/artist"

    //function to fetch artist data
    const getArtists = async () => {
        setIsLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        setIsLoading(false)
        // console.log(data)
        setArtists(data);
    };

    // useEffect to run getArtist when component mounts
    useEffect(() => {
        getArtists();
    }, []);
 
    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>
        {artists.map((artist, index) => {
          return (
            <div key={artist._id}>
              <h1>{artist.first_name}</h1>
              <h2>{index}</h2>
            </div>
          )
        })}
      </div>
    )
  
};

export default Artist;