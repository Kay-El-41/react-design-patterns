import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  FETCHING_RESOURCE_HOOK_PATTERN,
  FETCHING_USERS_HOOK_PATTERN,
  FETCHING_USER_HOOK_PATTERN,
  GENERIC_HOOK_PATTERN,
} from "../constants/path";

const CustomHookComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Custom Hook Components</h1>
        <h2 className="heading2">Purpose</h2>
        <p className="quote">
          Custom Hooks allows us to use the existing React hooks like useState
          and useEffect, to create our own reusable hooks.
        </p>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          Instead of repeating the same logic across multiple component, we
          encapsulate the logic into a reusable custom hook.
        </p>
        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-3">
          <Link to={FETCHING_USER_HOOK_PATTERN} className="home-btn">
            Fetching User Custom Hook
          </Link>
          <Link to={FETCHING_USERS_HOOK_PATTERN} className="home-btn">
            Fetching Users Custom Hook
          </Link>
          <Link to={FETCHING_RESOURCE_HOOK_PATTERN} className="home-btn">
            Fetching Resource Custom Hook
          </Link>
          <Link to={GENERIC_HOOK_PATTERN} className="home-btn">
            Generic Custom Hook
          </Link>
        </div>
      </main>
    </>
  );
};

export default CustomHookComponents;
