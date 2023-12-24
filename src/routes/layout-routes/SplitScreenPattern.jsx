import React from "react";
import SplitScreen from "../../components/pattern-components/layout-components/split-screen/SplitScreen";

const LeftSideComponent = () => {
  return (
    <div className="p-3 bg-white h-full text-center flex justify-center items-center">
      <h2 className="heading2">
        I am Top on mobile, and I am Left on Desktop.
      </h2>
    </div>
  );
};

const RightSideComponent = () => {
  return (
    <div className="p-3 bg-white h-full text-center flex justify-center items-center">
      <h2 className="heading2">
        I am Bottom on mobile, and I am Right on Desktop.
      </h2>
    </div>
  );
};

const SplitScreenPattern = () => {
  return (
    <SplitScreen leftWidth={2} rightWidth={3} gap={10}>
      <LeftSideComponent />
      <RightSideComponent />
    </SplitScreen>
  );
};

export default SplitScreenPattern;
