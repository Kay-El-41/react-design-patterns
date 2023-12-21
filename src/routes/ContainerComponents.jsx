import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ContainerComponents = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <h1 className="heading1">Container Components</h1>
        <h2 className="heading2">Purpose</h2>
        <p className="quote">
          The Container Components are responsible for data handling and
          managing on behalf of their child components.
        </p>
        <h2 className="heading2">Concept</h2>
        <p className="quote">
          When there are multiple components that need to share or use the same
          common logic in data fetching or handling, this is where the container
          components shine.
        </p>
        <br />
        <p className="quote">
          The child components are unaware of the source or management of their
          data. Instead, they should simply receive data as props and display
          them.
        </p>
        <h2 className="heading2">Design Patterns</h2>
        <div className="flex flex-col gap-3">
          {/* <Link to={""} className="home-btn">
            Screen Split Component
          </Link>
          <Link to={""} className="home-btn">
            Displaying Lists
          </Link>
          <Link to={""} className="home-btn">
            Modals
          </Link> */}
        </div>
      </main>
    </>
  );
};

export default ContainerComponents;
