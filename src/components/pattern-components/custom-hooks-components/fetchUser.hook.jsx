import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};

export default useFetchUser;

// * Custom Hooks should start with the "use" keyword in their name.
// This custom hook fetch the current user data and return it
