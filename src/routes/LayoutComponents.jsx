import React from "react";
import Navbar from "../components/Navbar";

const LayoutComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Layout Components</h1>
        <h2 className="heading2">Purpose</h2>
        <p className="quote">
          The Layout Components focus on organizing other components within a
          web page
        </p>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          The core content of our pages, should be unaware and unconcerned about
          their precise location withing the page structure.
        </p>
        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-3">
          <button className="home-btn">Screen Split Component</button>
          <button className="home-btn">Displaying Lists</button>
          <button className="home-btn">Modals</button>
        </div>
      </main>
    </>
  );
};

export default LayoutComponents;
