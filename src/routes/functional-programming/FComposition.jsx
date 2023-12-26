import React from "react";
import Navbar from "../../components/Navbar";
import {
  GreenSmallButton,
  RedButton,
} from "../../components/pattern-components/functional-programming-components/Composition";

const FComposition = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <RedButton text={"I am Red"} />
        <GreenSmallButton text={"I am Small and Green"} />
      </section>
    </>
  );
};

export default FComposition;
