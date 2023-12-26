import React from "react";
import Navbar from "../../components/Navbar";
import useFetchResource from "../../components/pattern-components/custom-hooks-components/fetchResource.hook";
import BookInfo from "../../components/pattern-components/container-components/BookInfo";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";

const CHFetchingResource = () => {
  const book = useFetchResource("/api/books/1");
  const user = useFetchResource("/api/users/1");
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <BookInfo book={book} />
        <br />
        <UserInfo user={user} />
      </section>
    </>
  );
};

export default CHFetchingResource;

// * Just call the custom hook and invoke it.
