import React from "react";
import CurrentUserLoader from "../components/pattern-components/container-components/CurrentUserLoader";
import UserInfo from "../components/pattern-components/container-components/UserInfo";
import Navbar from "../components/Navbar";

const SimpleUserLoader = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <CurrentUserLoader>
          <UserInfo />
        </CurrentUserLoader>
      </section>
    </>
  );
};

export default SimpleUserLoader;
