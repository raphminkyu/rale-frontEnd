import React from "react";
import ReactWordcloud from "react-wordcloud";
const WordChart = () => {
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 40],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  const words = [
    {
      text: "mistake",
      value: 3,
    },
    {
      text: "thought",
      value: 1,
    },
    {
      text: "Math",
      value: 2,
    },
    {
      text: "Linear algebra",
      value: 1,
    },
    {
      text: "x",
      value: 2,
    },
    {
      text: "y",
      value: 2,
    },
    {
      text: "Quadratic interpolation",
      value: 2,
    },
  ];
  return (
    <div className="topics">
      <h3>Topics:</h3>
      <div className="wordChart">
        <ReactWordcloud options={options} words={words} />
      </div>
    </div>
  );
};

export default WordChart;
