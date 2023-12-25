import Navbar from "../../components/Navbar";
import React from "react";
import ControlledModal from "../../components/pattern-components/controlled-and-uncontrolled/ControlledModal";
import { useState } from "react";

const CControlledModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <ControlledModal
          shouldDisplay={showModal}
          onClose={() => setShowModal(false)}
        >
          <p>I'm a modal. And I'm controlled by my parent.</p>
        </ControlledModal>
        <button
          className="home-btn"
          onClick={() => setShowModal((prev) => !prev)}
        >
          {showModal ? "Hide Modal" : "Display Modal"}
        </button>
      </section>
    </>
  );
};

export default CControlledModal;

// * The Modal is now controlled by the parent.
