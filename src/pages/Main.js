import NewArtistForm from "../components/NewArtistForm";


const Main = (props) => {
  return (
    <div>
      <h1>This is the Main Page</h1>
      <br></br>
      <img src="https://media.istockphoto.com/vectors/crossed-tattoo-machines-isolated-on-white-background-design-element-vector-id934818866?k=20&m=934818866&s=612x612&w=0&h=FlUG1lKnzyZTqnvWQypV9K_0b1RmBzVkpkHvAdOU-eQ=" alt="inkX logo"/>
      <br></br>
      <NewArtistForm className= "form" createArtist={props.createArtist} />
    </div>

  )
};

export default Main;