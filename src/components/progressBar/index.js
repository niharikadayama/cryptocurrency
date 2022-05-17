import React, { Component } from "react";

import { ProgressBarLine } from "react-progressbar-line";

class ProgressBarLineExample extends Component {
  render() {
    return (
      <ProgressBarLine
        value={50}
        min={0}
        max={100}
        strokeWidth={5}
        trailWidth={5}
        text="&#9660;"
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
            textAlign: "center",
          },
        }}
      />
    );
  }
}
export default ProgressBarLineExample;
