import React, {useState} from 'react'
import Cities from "../../components/Cities/Cities";
import Artist from '../../components/Artist/Artist'

const style = {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
}

const ArtistPage = ({ URL }) => {
const [city, setCity] = useState({});

  return (
    <div style={style}>
        <Cities setCity={setCity} />
        <Artist URL={URL} city={city} />
    </div>
  )
}

export default ArtistPage