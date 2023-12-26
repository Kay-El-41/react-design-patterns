import React from "react";

const isObject = (data) => typeof data === "object" && data !== null;

const Recursive = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  // This will return an array of  key and value pair
  // [ ['key', value], ['key', value] ]

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li className="flex gap-1" key={key}>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default Recursive;

// ? What are we going to do?
// We will show the item as

// But if the data we receive is not just a simple data, we cannot show as list item.
// Thus why we have to check if the data we receive is object or not.
// If not object, just simply return a list item.
// If object, loop through key and value.
