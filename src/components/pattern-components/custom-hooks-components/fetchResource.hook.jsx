import { useState, useEffect } from "react";
import axios from "axios";

const useFetchResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};

export default useFetchResource;

// * Custom Hooks should start with the "use" keyword in their name.
// This custom hook fetch the data using the url and return it
// This is a very useful pattern for fetching data
// This is similar to container, and hoc, yet this one is much more simpler.

// We are going to make this one more generic!
