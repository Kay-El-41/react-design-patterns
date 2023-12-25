import React from "react";
import Navbar from "../../components/Navbar";
import Controlled from "../../components/pattern-components/controlled-and-uncontrolled/Controlled";

const CControlled = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <Controlled />
      </section>
    </>
  );
};

export default CControlled;
