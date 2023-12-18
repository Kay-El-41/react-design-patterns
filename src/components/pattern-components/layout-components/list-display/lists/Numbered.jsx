import React from "react";

const NumberedList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-2">
          <h1>{idx + 1}</h1>
          <ItemComponent {...{ [sourceName]: item }} />
          {/* //? This is going to be like this. */}
          {/* <Component {...{ prop: item }}/> */}
          {/* It is similar to this because the props are the key and value. */}
          {/* <Component prop=item/> */}
        </div>
      ))}
    </>
  );
};

export default NumberedList;

//? What is this?
// Each item will be mapped with numbered.
// The actual ui is based on the ItemComponent.
// The ItemComponent can be anything. It could be a Card, or Box, or Something else.

// This is very useful in reusing the similar UI with different components.
// For Example, let say you have a list of products and you want to show them as the horizontal slider.
// For a set of products, you want another card design that differs from other set of products.
// Then you can apply this pattern.

// You only need a list component and two ui component.
// 1. HorizontalList that will list the items mapped out like this NumberedList component.
// 2. Two UI components for two set of products.
