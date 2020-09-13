import React from "react";
import ReactWordcloud from "react-wordcloud";
const WordChart = ({ topics }) => {
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Lato",
    fontSizes: [10, 50, 80, 120],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotations: 1,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  var topicMap = {};

  topics.forEach((topic) => {
    if (topicMap[topic]) {
      topicMap[topic] += 1;
    } else {
      topicMap[topic] = 1;
    }
  });
  var cloudArray = [];
  for (let [key, value] of Object.entries(topicMap)) {
    cloudArray.push({ text: key, value });
  }
  return (
    <div className="topics card">
      <div className="wordChart card-body">
        <ReactWordcloud
          options={options}
          words={cloudArray ? cloudArray : []}
        />
      </div>
    </div>
  );
};

export default WordChart;
