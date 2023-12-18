import React from "react";

const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1, gap = 1 }) => {
  const [LeftComponent, RightComponent] = children;

  return (
    <div
      style={{ gap: gap }}
      className="flex flex-col md:flex-row p-3 bg-slate-300 w-full h-screen"
    >
      <div style={{ flex: leftWidth }}>{LeftComponent}</div>
      <div style={{ flex: rightWidth }}>{RightComponent}</div>
    </div>
  );
};

export default SplitScreen;
