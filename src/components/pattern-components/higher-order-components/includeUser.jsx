import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      })();
    }, [userId]);

    return <Component {...props} user={user} />;
  };
};

// ? What does this HOC do?
// This HOC is is similar to the container pattern we have used.
// The similar logic of fetching dynamic userId and then passing as prop to the child.
// This HOC pattern is much more simpler than the container pattern.
