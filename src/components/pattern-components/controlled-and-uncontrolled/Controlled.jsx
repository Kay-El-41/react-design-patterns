import React from "react";
import { useState, useEffect } from "react";

// * Controlled Forms are very useful in realtime form validation.

const Controlled = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const [nameLengthError, setNameLengthError] = useState(false);

  useEffect(() => {
    if (name.length < 1) {
      console.log("Name cannot be empty");
      setNameLengthError(true);
    } else {
      setNameLengthError(false);
    }
  }, [name]);

  return (
    <form className="flex flex-col gap-3 max-w-md">
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      {nameLengthError && (
        <p className="text-red-500 text-xs">Name cannot be empty!</p>
      )}
      <input
        type="number"
        name="age"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2"
      />
      <input
        type="submit"
        value="Submit"
        disabled={nameLengthError}
        className="p-2 bg-slate-400 text-white"
      />
    </form>
  );
};

export default Controlled;
