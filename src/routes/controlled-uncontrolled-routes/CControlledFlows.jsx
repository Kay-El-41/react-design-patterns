import Navbar from "../../components/Navbar";
import React from "react";
import ControlledFlows from "../../components/pattern-components/controlled-and-uncontrolled/ControlledFlows";
import { useState } from "react";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step One</h1>
      <button onClick={() => goNext({ name: "John Doe" })} className="home-btn">
        Next
      </button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step Two</h1>
      <button onClick={() => goNext({ age: 23 })} className="home-btn">
        Next
      </button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step Three</h1>
      <h1>Congratulations! You finished the form.</h1>

      <button onClick={() => goNext({})} className="home-btn">
        Next
      </button>
    </>
  );
};
const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step Four</h1>
      <button
        onClick={() => goNext({ country: "Myanmar" })}
        className="home-btn"
      >
        Next
      </button>
    </>
  );
};

const CControlledFlows = () => {
  const [data, setData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const onNext = (dataFromThisStep) => {
    setData({ ...data, ...dataFromThisStep });
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <ControlledFlows
          currentIndex={currentStep}
          onNext={onNext}
          onDone={() => {
            console.log(data, "I am final data");
            alert("Yes, you made to the final step!");
          }}
        >
          <StepOne />
          <StepTwo />
          {data?.age > 25 && <StepThree />}
          <StepFour />
        </ControlledFlows>
      </section>
    </>
  );
};

export default CControlledFlows;

// Now we can control the conditional rendering.
