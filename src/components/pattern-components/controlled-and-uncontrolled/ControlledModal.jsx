import React from "react";
import { useState } from "react";

// * The Modal in the Layout Patterns is Uncontrolled Modal

// * But this Modal is the controlled modal.

const ControlledModal = ({ shouldDisplay, onClose, children }) => {
  return (
    <div className="container">
      {shouldDisplay && (
        <div onClick={onClose} className="modal-background">
          <div onClick={(e) => e.stopPropagation()} className="modal-content">
            <button onClick={onClose}>Hide Modal</button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlledModal;
