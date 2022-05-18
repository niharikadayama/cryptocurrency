import React from "react";

import { ProgressBarLine } from "react-progressbar-line";
const ProgressBarLineExample = (minimum, maximum) => {
  const per = (minimum / maximum) * 100;
  console.log(per);
  return (
    <ProgressBarLine
      value={80}
      min={0}
      max={100}
      strokeWidth={5}
      trailWidth={5}
      text="hiii"
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
