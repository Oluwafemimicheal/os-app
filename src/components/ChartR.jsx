import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function ChartR() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Instructor", "Student", "Courses", "Center"],
        datasets: [
          {
            label: "Progress",

            data: [29, 35, 18, 42],
            backgroundColor: ["gray", "lighted", "lightblue", "skyblue"],
          },
        ],
      },
    });

    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default ChartR;
