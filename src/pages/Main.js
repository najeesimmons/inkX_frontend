import Form from "../components/Form";

const Main = (props) => {
  return (
    <div>
      <h1>This is the Main Page</h1>
      <br></br>
      <Form createArtist={props.createArtist} />
    </div>

  )
};

export default Main;