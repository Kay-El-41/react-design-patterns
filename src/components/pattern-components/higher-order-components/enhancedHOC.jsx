import axios from "axios";
import { useEffect, useState } from "react";

const toCapital = (str) => str[0].toUpperCase() + str.slice(1);

export const enhancedHOC = (Component, resourceUrl, resourceName) => {
  return (props) => {
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, [resourceUrl]);

    const onChange = (updates) => {
      setResource({ ...resource, ...updates });
    };

    const onPost = async () => {
      const response = axios.post(resourceUrl, { [resourceName]: resource });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onReset = async () => {
      setResource(initialResource);
    };

    // * APPROACH 2 FOR PASSING PROPS TO DIFFERENT COMPONENTS
    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
      [`onReset${toCapital(resourceName)}`]: onReset,
    };
    // *

    return (
      // <Component
      //   {...props}
      //   user={user}
      //   onPostUser={onPost}
      //   onResetUser={onReset}
      //   onChangeUser={onChange}
      // />
      // * APPROACH 1
      // <Component
      //   {...props}
      //   user={user}
      //   onPost={onPost}
      //   onReset={onReset}
      //   onChange={onChange}
      // />
      // * APPROACH 2
      <Component {...props} {...resourceProps} />
    );
  };
};

// ? What does this HOC do?

// * This is the upgraded version of updateUsers.
// Just like in the container pattern, we get resource URL and resource Name.
// The only problem here is how to pass the props. There are several components that will use this HOC and they might not have the same prop name.
//? The prop name could be users or books, onPostUser or onPostBooks. How do we solve this problem?
// * We will have to pass the props with more generic name, and use the same name in the components that will use HOC.
// * OR use the approach above. Make the name similar to the component.
// If it was 'user', will be passed with onChangeUser. For book, with onChangeBook.
