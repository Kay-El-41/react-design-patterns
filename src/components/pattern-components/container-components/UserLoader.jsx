import axios from "axios";
import React, { useState, useEffect } from "react";

// This is step 2

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // * This is how you write an async function inside useEffect Hook
    // (async () => {})();
    (async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;

// ? How does it work??
// 1. This is the improved version of CurrentUserLoader.
// 2. CurrentUserLoader can only load the current user and it is limited in reusability.
// 3. This UserLoader component allows fetching of the user based on the id and it is more generic than CurrentUserLoader.
