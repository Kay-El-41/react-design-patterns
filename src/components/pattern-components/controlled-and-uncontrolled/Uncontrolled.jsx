import React from "react";
import { useRef } from "react";

// * Uncontrolled components should not leak it's state outside of the component.

const Uncontrolled = () => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "I am an uncontrolled form component. I don't track my own data. I only track them when I'm triggered."
    );
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3 max-w-md">
      <input
        type="text"
        name="name"
        id="name"
        ref={nameInputRef}
        className="border p-2"
      />
      <input
        type="number"
        name="age"
        id="age"
        ref={ageInputRef}
        className="border p-2"
      />
      <input
        type="submit"
        value="Submit"
        className="p-2 bg-slate-400 text-white"
      />
    </form>
  );
};

export default Uncontrolled;
