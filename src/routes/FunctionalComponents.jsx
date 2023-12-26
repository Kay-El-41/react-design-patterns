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
      <main className="container mt-3 pb-8">
        <h1 className="heading1">Functional Programming Components</h1>
        <h2 className="heading2">Purpose</h2>
        <p className="quote">
          Functional Programming is the approach to organizing code and
          emphasizes minimizing mutation and stage changes utilizing the pure
          functions independent on the external data and treating functions as
          first class citizens.
        </p>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          Functional Programming has been applied throughout the design pattern
          examples. They include, controlled components, functional components,
          HOCs.
        </p>
        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-8">
          <div>
            <p className="quote">
              Recursive components relies on recursion to achieve specific
              effect. They are incredibly powerful and offers unique solution to
              complex problems.
            </p>
            <br />
            <Link to={RECURSIVE_COMPONENT_PATTERN} className="home-btn">
              Recursive Functional Component
            </Link>
          </div>

          <div>
            <p className="quote">
              Component Composition Involves combining of multiple simpler
              components to achieve a single complex component.
            </p>
            <br />
            <Link to={COMPOSITION_COMPONENT_PATTERN} className="home-btn">
              Composition Functional Component
            </Link>
          </div>

          <div>
            <p className="quote">
              Partially applied components enables the creation of more specific
              version of general version of components by passing a subset of
              the component as a props. This allows for the code reuse and
              flexibility and component customization.
            </p>
            <br />
            <Link to={PARTIAL_COMPONENT_PATTERN} className="home-btn">
              Partial Functional Component
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default FunctionalComponents;
