import React from "react";
import { enhancedHOC } from "./enhancedHOC";

const BuildingFormsHOCBook = enhancedHOC(
  ({ book, onChangeBook, onPostBook, onResetBook }) => {
    const { name, title } = book || {};

    return book ? (
      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1">
          Name
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e) => onChangeBook({ name: e.target.value })}
            className="border "
          />
        </label>
        <label className="flex flex-col gap-1">
          Age
          <input
            type="text"
            name="title"
            id=""
            value={title}
            onChange={(e) => onChangeBook({ title: e.target.value })}
            className="border "
          />
        </label>
        <button onClick={onPostBook} className="home-btn">
          Change
        </button>
        <button onClick={onResetBook} className="home-btn">
          Reset
        </button>
      </div>
    ) : (
      <h3>Loading ...</h3>
    );
  },
  "/api/books/3",
  "book"
);
export default BuildingFormsHOCBook;

// This is an HOC Wrapper Component.
