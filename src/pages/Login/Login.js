import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    await login(email, password);

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
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </>
  );
};

export default Login;
