import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import Artist from "../pages/Artist";
import Show from "../pages/Show";

function Main(props) {

    const [artist, setArtist] = useState(null);

    const URL = "https://inkx-backend.herokuapp.com/artist";

    const getArtist = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setArtist(data);
    };

    const createArtist = async (artist) => {
        // make post request to create people
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(artist),
        });
        // update list of people
        getArtist();
    };

    useEffect(() => getArtist(), []);
    
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Artist artist={artist} createArtist={createArtist}/>}/>
                <Route path="/artist/:id" element={<Show/>}/>
            </Routes>
        </main>
    );
    }

export default Main;