import React from "react";
import { Component } from "react";

// Partially enabled component will be used with HOC Patterns

const partialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "20px" : "32px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const RedButton2 = partialComponent(Button, { color: "crimson" });
export const SmallRedButton = partialComponent(RedButton2, {
  size: "small",
});

// ? So, what is this?
// In the composition, we already found that we can make another components based on the component we already have.
// In partially enabled, we can reuse the component that was made from another component.
// The RedButton2 was created from Button.
// The SmallRedButton was created from the RedButton2 but only passed the size. Why? Because the RedButton2 is already red. We only need the size.
// That way we can reduce the code duplication.
