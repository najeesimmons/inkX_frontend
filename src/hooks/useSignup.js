import { useState } from "react";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:4000/user/signup/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data)

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    // will need to update authcontext here
    setIsLoading(false);
  };

  return { signup, isLoading, error };
};
