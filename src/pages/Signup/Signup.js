import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { signup, isLoading, error } = useSignup();

  const handleChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("logging in");
    const { email, password } = formState;
    await signup(email, password);

    setFormState({
      email: "",
      password: "",
    });
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
