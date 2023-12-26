import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  COLLECTING_DATA_COMPONENT_PATTERN,
  CONTROLLED_COMPONENT_PATTERN,
  CONTROLLED_FLOWS_COMPONENT_PATTERN,
  CONTROLLED_MODAL_COMPONENT_PATTERN,
  UNCONTROLLED_COMPONENT_PATTERN,
  UNCONTROLLED_FLOWS_COMPONENT_PATTERN,
} from "../constants/path";

const CAndUnComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Controlled and Uncontrolled Components</h1>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          <span className="heading2">Uncontrolled Components</span>
          <br />
          <span>
            Uncontrolled Components are the components that manages its own
            internal state.
          </span>
        </p>
        <p className="quote">
          <span className="heading2">Controlled Components</span>
          <br />
          <span>
            Controlled Components are the components but their states are
            controlled and managed by the parent component. The states are
            passed down as props.
          </span>
        </p>
        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-3">
          <Link to={UNCONTROLLED_COMPONENT_PATTERN} className="home-btn">
            Uncontrolled Component
          </Link>
          <Link to={CONTROLLED_COMPONENT_PATTERN} className="home-btn">
            Controlled Component
          </Link>
          <Link to={CONTROLLED_MODAL_COMPONENT_PATTERN} className="home-btn">
            Controlled Modals
          </Link>
          <Link to={UNCONTROLLED_FLOWS_COMPONENT_PATTERN} className="home-btn">
            Uncontrolled Flows
          </Link>
          <Link to={COLLECTING_DATA_COMPONENT_PATTERN} className="home-btn">
            Collecting Data
          </Link>
          <Link to={CONTROLLED_FLOWS_COMPONENT_PATTERN} className="home-btn">
            Controlled Flows
          </Link>
        </div>
      </main>
    </>
  );
};

export default CAndUnComponents;
