import React from "react";

//* This is Controlled Flow. The data is managed by the parent.

const ControlledFlows = ({ children, onDone, currentIndex, onNext }) => {
  const goNext = (dataFromStep) => {
    if (currentIndex + 1 < React.Children.toArray(children).length) {
      onNext(dataFromStep);
    } else {
      onDone();
    }
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default ControlledFlows;
