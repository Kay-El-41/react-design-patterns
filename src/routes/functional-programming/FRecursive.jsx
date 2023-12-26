import React from "react";
import Navbar from "../../components/Navbar";
import Recursive from "../../components/pattern-components/functional-programming-components/Recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};
// ? This is the example data. The real world data can be much more complex life you have product, then product variation with another object containing, sizes and prices, colors.

const FRecursive = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <Recursive data={myNestedObject} />
      </section>
    </>
  );
};

export default FRecursive;
