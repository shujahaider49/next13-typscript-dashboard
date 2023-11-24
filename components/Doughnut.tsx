import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {}

const DoughnutChart: React.FC<DoughnutChartProps> = () => {
  const data = {
    labels: ["Rent", "Sales", "Profit"],
    datasets: [
      {
        label: "# of Votes",
        data: [825, 1123, 1231],
        backgroundColor: [
          "rgba(255, 99, 132, 2)",
          "rgba(54, 162, 235, 2)",
          "rgba(255, 206, 86, 2)",
          "rgba(75, 192, 192, 2)",
          "rgba(153, 102, 255, 2)",
          "rgba(255, 159, 64, 2)",
        ],
      },
    ],
  };

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] sm:h-[30vh] m-auto p-4 border rounded-lg bg-white shadow-xl">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
