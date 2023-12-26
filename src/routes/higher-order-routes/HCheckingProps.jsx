import React from "react";
import Navbar from "../../components/Navbar";
import UserInfo from "../../components/pattern-components/container-components/UserInfo";
import { checkingProps } from "../../components/pattern-components/higher-order-components/checkingProps";

const UserInfoWrapper = checkingProps(UserInfo);
//! This is required since the HOC will return a component, it is important to create a new variable for the component.

const HCheckingProps = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <UserInfoWrapper a="I'm a prop" b={{ name: "Prop B" }} c={15} />
      </section>
    </>
  );
};

export default HCheckingProps;

// ? Why rendering loading...?
// THis is because UserInfo takes {user} as prop and we are passing a, b, and c.
// That why the UserInfo is returning Loading...
