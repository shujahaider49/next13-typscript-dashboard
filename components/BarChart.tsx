import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartsProps {}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface ChartOptions {
  plugins: {
    legend: {
      position: "top" | "center" | "left" | "right" | "bottom" | "chartArea" | { [scaleId: string]: number } | undefined;
    };
    title: {
      display: boolean;
      text: string;
    };
  };
  maintainAspectRatio: boolean;
  responsive: boolean;
}

const BarCharts: React.FC<BarChartsProps> = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Revenue",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  });

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales$",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235,1)",
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white shadow-xl">
        <Bar data={chartData} options={chartOptions as any} />
      </div>
    </>
  );
};

export default BarCharts;
