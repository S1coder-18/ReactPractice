import React from "react";

export const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("👶 Child re-rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});
