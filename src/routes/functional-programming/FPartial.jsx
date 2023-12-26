import React from "react";
import Navbar from "../../components/Navbar";
import {
  RedButton2,
  SmallRedButton,
} from "../../components/pattern-components/functional-programming-components/Partial";

const FPartial = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <RedButton2 text={"I am Red"} />
        <SmallRedButton text={"I am Red and Small"} />
      </section>
    </>
  );
};

export default FPartial;
