import React from "react";
import { enhancedHOC } from "./enhancedHOC";

const BuildingFormsHOCUser = enhancedHOC(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};

    return user ? (
      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1">
          Name
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
            className="border "
          />
        </label>
        <label className="flex flex-col gap-1">
          Age
          <input
            type="number"
            name="age"
            id=""
            value={age}
            onChange={(e) => onChangeUser({ age: +e.target.value })}
            className="border "
          />
        </label>
        <button onClick={onPostUser} className="home-btn">
          Change
        </button>
        <button onClick={onResetUser} className="home-btn">
          Reset
        </button>
      </div>
    ) : (
      <h3>Loading ...</h3>
    );
  },
  "/api/users/3",
  "user"
);
export default BuildingFormsHOCUser;

// This is an HOC Wrapper Component.
