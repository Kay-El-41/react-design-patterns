import Navbar from "../../components/Navbar";
import React from "react";
import Uncontrolled from "../../components/pattern-components/controlled-and-uncontrolled/Uncontrolled";

const CUncontrolled = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <Uncontrolled />
      </section>
    </>
  );
};

export default CUncontrolled;
