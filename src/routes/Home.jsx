import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CONTAINER_COMPONENTS,
  CONTROLLED_UNCONTROLLED_COMPONENTS,
  CUSTOM_HOOKS_COMPONENTS,
  FUNCTIONAL_PROGRAMMING_COMPONENTS,
  HIGHER_ORDER_COMPONENTS,
  LAYOUT_COMPONENTS,
} from "../constants/path";

const Home = () => {
  return (
    <>
      <header className="p-2">
        <h1 className="text-3xl text-center font-bold">
          Simple React Design Pattern
        </h1>
      </header>
      <main className="flex flex-col justify-center items-center mt-3 gap-3 ">
        <Link to={LAYOUT_COMPONENTS} className="home-btn">
          Layout Components
        </Link>
        <Link to={CONTAINER_COMPONENTS} className="home-btn">
          Container Components
        </Link>
        <Link to={CONTROLLED_UNCONTROLLED_COMPONENTS} className="home-btn">
          Controlled And Uncontrolled Components
        </Link>
        <Link to={HIGHER_ORDER_COMPONENTS} className="home-btn">
          Higher Order Components
        </Link>
        <Link to={CUSTOM_HOOKS_COMPONENTS} className="home-btn">
          Custom Hooks Components
        </Link>
        <Link to={FUNCTIONAL_PROGRAMMING_COMPONENTS} className="home-btn">
          Functional Programming Components
        </Link>
      </main>
    </>
  );
};

export default Home;
