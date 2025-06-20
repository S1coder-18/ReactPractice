import { useState } from "react";
import { ChildCounter1 } from "./ChildCounter1";
import { ChildCounter2 } from "./ChildCounter2";
import './/LiftingStateUp.Style/CommonState.css'; // 👈 Add this line for styling

export const CommonState = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="common-container">
      <h2>Lifting State Up Example</h2>
      <div className="child-components">
        <ChildCounter1 value={count} onClick={setCount} />
        <ChildCounter2 value={count} onClick={setCount} />
      </div>
    </div>
  );
};
