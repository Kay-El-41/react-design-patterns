import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  LIST_DISPLAY_PATTERN,
  MODAL_PATTERN,
  SPLIT_SCREEN_PATTERN,
} from "../constants/path";

const LayoutComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Layout Components</h1>
        <h2 className="heading2">Purpose</h2>
        <p className="quote">
          The Layout Components focus on organizing other components within a
          web page.
        </p>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          The core content of our pages, should be unaware and unconcerned about
          their precise location withing the page structure.
        </p>
        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-3">
          <Link to={SPLIT_SCREEN_PATTERN} className="home-btn">
            Screen Split Component
          </Link>
          <Link to={LIST_DISPLAY_PATTERN} className="home-btn">
            Displaying Lists
          </Link>
          <Link to={MODAL_PATTERN} className="home-btn">
            Modals
          </Link>
        </div>
      </main>
    </>
  );
};

export default LayoutComponents;
