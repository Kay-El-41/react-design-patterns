import React from "react";

const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, idx) => (
        <ItemComponent key={idx} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;

// Please read the NumberedList.
