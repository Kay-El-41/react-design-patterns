import React from "react";
import Navbar from "../../components/Navbar";
import useFetchUser from "../../components/pattern-components/custom-hooks-components/fetchUser.hook";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";

const CHFetchingUser = () => {
  const user = useFetchUser();
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <UserInfo user={user} />
      </section>
    </>
  );
};

export default CHFetchingUser;

// * Just call the custom hook and invoke it.
