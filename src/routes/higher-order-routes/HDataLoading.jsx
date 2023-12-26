import React from "react";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";
import { includeUser } from "../../components/pattern-components/higher-order-components/includeUser";

const UserInfoLoader = includeUser(UserInfo, "3");

const HDataLoading = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <UserInfoLoader />
      </section>
    </>
  );
};

export default HDataLoading;
