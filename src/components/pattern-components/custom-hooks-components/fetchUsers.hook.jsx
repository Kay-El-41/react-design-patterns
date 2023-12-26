import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUsers = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
    })();
  }, []);

  return user;
};

export default useFetchUsers;

// * Custom Hooks should start with the "use" keyword in their name.
// This custom hook fetch the user by their id and return it
// Let make this more useful than fetching user
