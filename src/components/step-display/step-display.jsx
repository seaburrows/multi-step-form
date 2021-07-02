import React from "react";

export const StepDisplay = ({ stepIndex, stepTitles }) => {
  return (
    <div>
      {stepTitles.map((name, index) => (
        // using index as a key here is acceptable since this is currently a unique identifier. // TODO: harden
        <div key={index}>{name}</div>
      ))}
    </div>
  );
};
