import React from "react";
import { useState } from "react";

//* This is Part 2.

const CollectingData = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = (dataFromThisStep) => {
    const newData = {
      ...data,
      ...dataFromThisStep,
    };

    console.log(newData);

    const nextStepIndex = currentStep + 1;

    if (nextStepIndex < children.length) {
      setCurrentStep(nextStepIndex);
    } else {
      onDone(newData);
    }

    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStep];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default CollectingData;

// ? How does this better than the part 1.
// 1. We collect data during the goNext function.
// 2. We collect by creating a new object 'newData' where we combine both existing data and new data.
// 3. Then we check if this is the last step. Please notice, we are using children.length. This could introduce a bug if there are conditional rendering in the parent.
// 4. If last step, we call the onDone function. onDone function could be anything.
// 5. Else, we continue the step.
