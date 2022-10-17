import { useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("logging in");
    //send fetch request
  };

  return (
    <>
      <h1>Welcome to inkX</h1>
      <form>
        <label>email</label>
        <input
          name="email"
          placeholder="email"
          value={formState.email}
          onChange={handleChange}
        ></input>
        <label>password</label>
        <input
          name="password"
          placeholder="password"
          value={formState.password}
          onChange={handleChange}
        ></input>
        <button onClick={handlesubmit}>Sign Up</button>
      </form>
    </>
  );
};

export default Login;
