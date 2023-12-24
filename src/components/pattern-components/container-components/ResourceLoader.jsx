import axios from "axios";
import React, { useState, useEffect } from "react";

// This is step 3

const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // * This is how you write an async function inside useEffect Hook
    // (async () => {})();
    (async () => {
      const response = await axios.get(`/api/${resourceUrl}`);
      setResource(response.data);
    })();
  }, [resourceUrl]);

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

export default ResourceLoader;

// ? How does it work??
// 1. This is the improved version of UserLoader.
// 2. UserLoader is generic and is good when fetching data with user Id. But it cannot fetch the books.
// 3. Fetching user and book have similar API route, thus we are improving this version.
// 4. We replaced the api route with resourceUrl which can either be books or users.
// 5. In the clone element, we have to attached the dynamic key for the children prop.
// 6. Thus using the dynamic []:resource is a great way to handle children props.

// * This is the point where we can use this component in the real-world projects.
// * The code is clean and efficient. But we can always make it better.
