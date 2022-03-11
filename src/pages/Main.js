import NewArtistForm from "../components/NewArtistForm";


const Main = (props) => {
  return (
    <div>
      <h1>This is the Main Page</h1>
      <br></br>
      <NewArtistForm className= "form" createArtist={props.createArtist} />
    </div>

  )
};

export default Main;