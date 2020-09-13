import React from "react";

const BubbleChart = require("@weknow/react-bubble-chart-d3");
const TopicsChart = () => {
  return (
    <div className="topics">
      <h3>Topics</h3>
      <BubbleChart
        width={400}
        height={400}
        fontFamily="Arial"
        showLegend={false}
        overflow={true}
        graph={{
          zoom: 1.0,
          offsetX: -0.04,
          offsetY: -0.05,
        }}
        legendPercentage={5}
        data={[
          { label: "CRM", value: 1 },
          { label: "API", value: 1 },
          { label: "Data", value: 1 },
          { label: "Commerce", value: 1 },
          { label: "AI", value: 3 },
          { label: "Management", value: 5 },
          { label: "Testing", value: 6 },
        ]}
      />
    </div>
  );
};

export default TopicsChart;
