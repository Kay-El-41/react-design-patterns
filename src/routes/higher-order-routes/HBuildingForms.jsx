import React from "react";
import Navbar from "../../components/Navbar";
import BuildingForms from "../../components/pattern-components/higher-order-components/BuildingForms";

const HBuildingForms = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-3 space-y-5">
        <div>
          <BuildingForms />
        </div>
      </section>
    </>
  );
};

export default HBuildingForms;
