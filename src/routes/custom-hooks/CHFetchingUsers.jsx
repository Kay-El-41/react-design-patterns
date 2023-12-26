import React from "react";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";
import useFetchUsers from "../../components/pattern-components/custom-hooks-components/fetchUsers.hook";

const CHFetchingUsers = () => {
  const user1 = useFetchUsers("1");
  const user2 = useFetchUsers("2");
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <UserInfo user={user1} />
        <br />
        <UserInfo user={user2} />
      </section>
    </>
  );
};

export default CHFetchingUsers;

// * Just call the custom hook and invoke it.
