import React from "react";
import "./CSS/Child1.css";

export const Child1 = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child--1 re-rendered");

  return (
    <div className="child-box">
      <h3>Child Component - 1</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});
