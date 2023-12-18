import React from "react";
import RegularList from "../components/pattern-components/layout-components/list-display/lists/RegularList";
import { authors } from "../data/authors";
import SmallAuthorListItems from "../components/pattern-components/layout-components/list-display/authors/SmallListItems";
import LargeAuthorListItems from "../components/pattern-components/layout-components/list-display/authors/LargeListItems";
import SmallBookListItem from "../components/pattern-components/layout-components/list-display/books/SmallListItems";
import LargeListItems from "../components/pattern-components/layout-components/list-display/books/LargeListItems";
import { books } from "../data/books";
import NumberedList from "../components/pattern-components/layout-components/list-display/lists/Numbered";
import Navbar from "../components/Navbar";

const ListDisplay = () => {
  return (
    <>
      {/* Displaying a regular list */}
      <Navbar />
      <div className="container">
        <h2 className="heading2">Small Author List</h2>
        <div className="flex flex-col gap-2">
          <NumberedList
            items={authors}
            sourceName={"author"}
            ItemComponent={SmallAuthorListItems}
          />
          <hr />
        </div>
      </div>
      <div className="container">
        <h2 className="heading2">Large Author List</h2>
        <div className="flex flex-col gap-2">
          <RegularList
            items={authors}
            sourceName={"author"}
            ItemComponent={LargeAuthorListItems}
          />
          <hr />
        </div>
      </div>
      <div className="container">
        <h2 className="heading2">Large Book List</h2>
        <div className="flex flex-col gap-2">
          <NumberedList
            items={books}
            sourceName={"book"}
            ItemComponent={SmallBookListItem}
          />
          <hr />
        </div>
      </div>
      <div className="container">
        <h2 className="heading2">Large Book List</h2>
        <div className="flex flex-col gap-2">
          <RegularList
            items={books}
            sourceName={"book"}
            ItemComponent={LargeListItems}
          />
          <hr />
        </div>
      </div>
    </>
  );
};

export default ListDisplay;
