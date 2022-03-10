

const Artist = (props) => {

    return (
      <div>
        {props.artists.map((artist, index) => {
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