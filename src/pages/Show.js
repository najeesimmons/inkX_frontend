import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Show = (props) => {

    const params = useParams()
    const id = params._id;

    // "database" URL
    const url = "https://inkx-backend.herokuapp.com/artist"

    //state to hold the artist list data
    const [artist, setArtist] = useState("null");

    // function to fetch artist data
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
               <h1>This is the Show Page for {id}</h1>
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

export default Show;