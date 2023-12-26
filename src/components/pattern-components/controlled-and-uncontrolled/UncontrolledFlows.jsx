import React from "react";
import { useState } from "react";

//* This is Part 1.

//? What is flow?
// 1. Flow is the step. You can consider a form.
// 2. The form has two step.
// 3. The first step asks your name and age.
// 4. The next step asks your job and location.

const UncontrolledFlows = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const currentChild = React.Children.toArray(children)[currentStep];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default UncontrolledFlows;

// This is the uncontrolled flow. It manages it own data.
// Line 14, you must have seen this in the container pattern, where we used React.Children.map function.
// You might be thinking why are we using this React.Children.toArray.

// ? What's the difference?
// 1. React.Children takes in everything as children, including both truthy and falsy values, i.e., the array can contain elements, null, undefined or boolean values.
// 2. But React.Children.toArray will filter out all the falsely values, and return only truthy values.
// 3. But remember, using React.Children will always more performant than the other.

// ? How this component work?
// 1. The components takes in children. The children are the steps.
// 2. We have the currentStep which will determine which children to be shown.
// 3. And we use the similar pattern we used during container patterns, to pass the goNext function to the children.

// * Part 2 is Collecting Data
