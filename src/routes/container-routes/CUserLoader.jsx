import React from "react";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";
import Navbar from "../../components/Navbar";
import UserLoader from "../../components/pattern-components/container-components/UserLoader";

const CUserLoader = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <div>
          <UserLoader userId={"1"}>
            <UserInfo />
          </UserLoader>
        </div>

        <div>
          <UserLoader userId={"2"}>
            <UserInfo />
          </UserLoader>
        </div>

        <div>
          <UserLoader userId={"3"}>
            <UserInfo />
          </UserLoader>
        </div>
      </section>
    </>
  );
};

export default CUserLoader;
