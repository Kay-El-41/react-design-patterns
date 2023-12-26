import React from "react";
import Navbar from "../../components/Navbar";
import BookInfo from "../../components/pattern-components/container-components/BookInfo";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";
import useHook from "../../components/pattern-components/custom-hooks-components/generic.hook";
import axios from "axios";

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const CHGenericHook = () => {
  const user = useHook(async () => {
    const response = await axios.get("/api/users/1");
    return response.data;
  });

  const book = useHook(async () => {
    const response = await axios.get("/api/books/2");
    return response.data;
  });

  const localStorageData = useHook(() =>
    getDataFromLocalStorage("isAuthenticated")
  );

  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <BookInfo book={book} />
        <br />
        <UserInfo user={user} />
        <br />
        <h2>Hi I'm from Local Storage</h2>
        <p>{localStorageData}</p>
      </section>
    </>
  );
};

export default CHGenericHook;

// * Just call the custom hook and invoke it.

// Now we can pass the data source from anything.
