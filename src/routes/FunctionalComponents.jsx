import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  COMPOSITION_COMPONENT_PATTERN,
  PARTIAL_COMPONENT_PATTERN,
  RECURSIVE_COMPONENT_PATTERN,
} from "../constants/path";

const FunctionalComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Functional Programming Components</h1>
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
          <Link to={RECURSIVE_COMPONENT_PATTERN} className="home-btn">
            Recursive Functional Component
          </Link>
          <Link to={COMPOSITION_COMPONENT_PATTERN} className="home-btn">
            Composition Functional Component
          </Link>
          <Link to={PARTIAL_COMPONENT_PATTERN} className="home-btn">
            Partial Functional Component
          </Link>
        </div>
      </main>
    </>
  );
};

export default FunctionalComponents;
