import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const updateUser = (Component, userId) => {
  return (props) => {
    const [initialUser, setInitialUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/api/users/${userId}`);
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, [userId]);

    const onChangeUser = (updates) => {
      setUser({ ...user, ...updates });
    };

    const onPostUser = async () => {
      const response = axios.post(`/api/users/${userId}`, { user });
      setInitialUser(response.data);
      setUser(response.data);
    };

    const onResetUser = async () => {
      setUser(initialUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
        onChangeUser={onChangeUser}
      />
    );
  };
};

// ? What does this HOC do?
// This HOC fetches the original data.
// This HOC also post the data we edited.
// This HOC also reset the editing data.
// Then pass on to the component.
// * This HOC is more powerful than the container pattern we studied. The container pattern only pass the data.
// This HOC can also edit the data.

// * However, this is only restricted to only users.
// * This is not so generic. During the container patterns, we upgraded that problem into more generic container pattern.
// * We are also refactoring this code into more generic HOC function in EnhancingHOC component.
