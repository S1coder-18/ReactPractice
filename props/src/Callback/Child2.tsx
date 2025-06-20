import React from "react";
import "./CSS/Child2.css";

export const Child2 = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child--2 re-rendered");

  return (
    <div className="child-box">
      <h3>Child Component - 2</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});
