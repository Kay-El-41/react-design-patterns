import React from "react";
import { redirect, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" bg-slate-400 w-full py-3 sticky top-0 left-0">
      <div className="container">
        <button onClick={() => navigate(-1)} className=" text-white">
          Back
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
