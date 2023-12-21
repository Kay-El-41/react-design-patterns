import React from "react";
import { useState } from "react";
import Navbar from "../../../Navbar";

const ModalCom = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container">
        <button onClick={() => setShow(true)}>Show Modal</button>
        {show && (
          <div onClick={() => setShow(false)} className="modal-background">
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
              <button onClick={() => setShow(false)}>Hide Modal</button>
              {children}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalCom;
