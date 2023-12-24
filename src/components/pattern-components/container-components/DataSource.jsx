import React, { useState, useEffect } from "react";

// This is step 4

const DataSource = ({ children, getData = () => {}, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // * This is how you write an async function inside useEffect Hook
    // (async () => {})();
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default DataSource;

// ? How does it work??
// 1. This is the improved version of Resource Loader.
// 2. The concept of this is even though this is the data container, the component does not know where the data is coming from.
// 3. We are passing the data fetching as a function from the parent. The function should just return the data we need to pass.
// 4. The "await" keyword is used to handle async functions, and it won't work in using with non-async functions.
// 5. This way we can either fetch the data using not only axios, but also other async functions, or local storage you can imagine.
