import React from "react";
import Navbar from "../../components/Navbar";
import BuildingFormsHOCUser from "../../components/pattern-components/higher-order-components/BuildingFormsHOCUser";
import BuildingFormsHOCBook from "../../components/pattern-components/higher-order-components/BuildingFormsHOCBook";

const HEnhancingHOC = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <div>
          <BuildingFormsHOCUser />
        </div>
        <div>
          <BuildingFormsHOCBook />
        </div>
      </section>
    </>
  );
};

export default HEnhancingHOC;
