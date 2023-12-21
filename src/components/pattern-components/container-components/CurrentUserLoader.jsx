import axios from "axios";
import React, { useState, useEffect } from "react";

// This is step 1

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // * This is how you write an async function inside useEffect Hook
    // (async () => {})();
    (async () => {
      const response = await axios.get("/api/current-user");
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

export default CurrentUserLoader;

// ? How does it work??
// 1. Using React.Children, we can access the children components that is inside the CurrentUserLoader.
// <CurrentUserLoader> <AChildComponent/> </CurrentUserLoader>

// 2. Using React.Children, we get an array of children, since there can be many children, we mapped each children.
// 3. Check if each Child is a valid element, i.e., a component, then we clone that element, attached our prop then return it.
// 4. If the child is not a valid element, return as it is.
