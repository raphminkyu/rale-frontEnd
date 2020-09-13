import React from "react";
import ReactWordcloud from "react-wordcloud";
import { useSelector } from "react-redux";
import { isLoaded, useFirebaseConnect } from "react-redux-firebase";
const WordChart = ({ topics }) => {
  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: false,
    deterministic: false,
    fontFamily: "Lato",
    fontSizes: [20, 30, 40, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 2,
    rotations: 1,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };
  /* var words = [
    {
      text: "mistake",
      value: 0.034,
    },
    {
      text: "thought",
      value: 0.022,
    },
    {
      text: "Math",
      value: 0.016,
    },
    {
      text: "Linear algebra",
      value: 0.014,
    },
    {
      text: "Quadratic interpolation",
      value: 0.011,
    },
    {
      text: "mistake",
      value: 0.034,
    },
    {
      text: "thought",
      value: 0.022,
    },
    {
      text: "Math",
      value: 0.016,
    },
    {
      text: "mistake",
      value: 0.034,
    },
    {
      text: "thought",
      value: 0.022,
    },
    {
      text: "Math",
      value: 0.016,
    },
  ]; */
  var words;
  if (topics) {
    words = topics.map((topic, index) => {
      return { text: topic.value.topic, value: index + 1 };
    });
  }
  return (
    <div className="topics card">
      <div className="wordChart card-body">
        <ReactWordcloud options={options} words={words ? words : []} />
      </div>
    </div>
  );
};

export default WordChart;
