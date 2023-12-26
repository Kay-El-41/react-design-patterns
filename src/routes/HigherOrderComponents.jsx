import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  BUILDING_FORMS_HOC_PATTERN,
  CHECKING_PROPS_HOC_PATTERN,
  DATA_LOADING_HOC_PATTERN,
  ENHANCING_HOC_PATTERN,
  UPDATING_DATA_HOC_PATTERN,
} from "../constants/path";

const HigherOrderComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Higher Order Components</h1>
        <h2 className="heading2">Purpose</h2>
        <p className="quote">
          The HOC generate and return a new function or component when they are
          called. HOC can share similar logic among components, or add new
          functionalities without modifying the existing code.
        </p>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          Higher Order Components are the components that return another
          components. HOCs are just functions that return components.
        </p>

        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-3">
          <Link to={CHECKING_PROPS_HOC_PATTERN} className="home-btn">
            Checking Props
          </Link>
          <Link to={DATA_LOADING_HOC_PATTERN} className="home-btn">
            Data Loading
          </Link>
          <Link to={UPDATING_DATA_HOC_PATTERN} className="home-btn">
            Updating Data
          </Link>
          <Link to={BUILDING_FORMS_HOC_PATTERN} className="home-btn">
            Building Forms
          </Link>
          <Link to={ENHANCING_HOC_PATTERN} className="home-btn">
            Enhancing HOC
          </Link>
        </div>
      </main>
    </>
  );
};

export default HigherOrderComponents;
