"use client";

import { useEffect } from "react";

// import billboard.js
import bb, { treemap } from "billboard.js";
import "billboard.js/dist/billboard.css"; // default css

export default function BChart({ chartData }) {
  useEffect(() => {
    var chart = bb.generate({
      padding: {
        top: 10,
        bottom: 15,
      },
      data: {
        columns: chartData.chartDataArr,
        type: treemap(),
        labels: {
          colors: "#fff",
        },
      },
      treemap: {
        label: {
          threshold: 0.001,
          fontSize: 40,
        },
      },
      size: {
        height: 550,
      },
      bindto: "#chart",
    });
  }, [chartData]);

  return <div id="chart"></div>;
}
