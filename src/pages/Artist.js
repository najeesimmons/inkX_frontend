import { useState, useEffect } from "react";

const Artist = (props) => {
    //state to hold the artist list data
    const [artist, setArtist] = useState("null");

    // "database" URL
    const url = "https://inkx-backend.herokuapp.com/artist"

    //function to fetch artist data
    const getArtist = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setArtist(data);
    };

    // useEffect to run getArtist when component mounts
    useEffect(() => {
        getArtist();
    }, []);
 
    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
               {artist.map(artist => {
                return(
                <h2>{artist.first_name}</h2>)
            })}
            </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if artist has data, run the loaded function, otherwise, run loading
  return artist ? loaded() : loading();
};

export default Artist;