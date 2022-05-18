import React from "react";

import { ProgressBarLine } from "react-progressbar-line";
const ProgressBarLineExample = ({ val }) => {
  const percentage = val <= 0 ? 0 : val === "infinity" ? 0 : val;
  return (
    <ProgressBarLine
      value={percentage}
      min={0}
      max={100}
      strokeWidth={5}
      trailWidth={5}
      styles={{
        path: {
          stroke: "#a6b0c3",
        },
        trail: {
          stroke: "#cfd6e4",
        },
        text: {
          fill: "#a6b0c3",
          fontSize: "10px",
          textAlign: "right",
        },
      }}
    />
  );
};

export default ProgressBarLineExample;
