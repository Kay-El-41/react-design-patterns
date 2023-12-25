import Navbar from "../../components/Navbar";
import React from "react";
import CollectingData from "../../components/pattern-components/controlled-and-uncontrolled/CollectingData";

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
      <button
        onClick={() => goNext({ country: "Myanmar" })}
        className="home-btn"
      >
        Next
      </button>
    </>
  );
};

const CCollectingData = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <CollectingData
          onDone={(data) => {
            console.log(data, "I am final data");
            alert("Yes, you made to the final step!");
          }}
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </CollectingData>
      </section>
    </>
  );
};

export default CCollectingData;

// ! Please notice that StepOne, Two, and Three are only here to explain how work.
// ! In real world project, you need to actually pass the data.

// * This is quite good enough, if you don't need conditional rendering in steps.
// * However, real world projects are complicated and there are a lot of conditions.
// * Let's say, we only want to show the stepThree if the age is over 18.
// * We cannot do this here, because this is uncontrolled flow. That's why we are turning this into controlled flow in the next lesson.
