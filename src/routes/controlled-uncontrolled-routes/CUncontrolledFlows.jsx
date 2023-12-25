import Navbar from "../../components/Navbar";
import React from "react";
import UncontrolledFlows from "../../components/pattern-components/controlled-and-uncontrolled/UncontrolledFlows";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step One</h1>
      <button onClick={goNext} className="home-btn">
        Next
      </button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step Two</h1>
      <button onClick={goNext} className="home-btn">
        Next
      </button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step Three</h1>
      <button onClick={goNext} className="home-btn">
        Next
      </button>
    </>
  );
};

const CUncontrolledFlows = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <UncontrolledFlows>
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledFlows>
      </section>
    </>
  );
};

export default CUncontrolledFlows;
