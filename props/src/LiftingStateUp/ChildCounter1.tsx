import type { Dispatch, SetStateAction } from "react";
import './/LiftingStateUp.Style/ChildContainer1.css'; // 👈 Import the CSS file

type Props = {
  value: number;
  onClick: Dispatch<SetStateAction<number>>;
};

export const ChildCounter1 = ({ value, onClick }: Props) => {
  const handleClick = () => {
    onClick(prev => prev + 1);
  };

  return (
    <div className="child-counter">
      <h3 className="child-title">Increment from Child-Container-1</h3>
      <p className="child-value">Value: {value}</p>
      <button className="child-button" onClick={handleClick}>Child-1</button>
    </div>
  );
};
