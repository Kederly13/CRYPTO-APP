import { FC } from "react";
import { StyledSparklineWrapper } from './StyledSparkline';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js/auto";

import { Line } from "react-chartjs-2";

import { ISparklineProps } from "../../../../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);
export const options = {
  elements: {
    point: {
      radius: 50,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  hitRadius: 250,
  scales: {
    y: {
      display: false, 
      ticks: {
        display: false,
      },
    },
    x: {
      display: false,
      categoryPercentage: 0.26,
      ticks: {
        display: false,
      },
      grid: {
        display: false, 
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: true, // Hide the tooltip
      backgroundColor: "rgba(0, 0, 0, 0)",
      caretSize: 5,
      caretPadding: 1,
      displayColors: false,
    },
    legend: {
      display: false,
    },
  },
};

export const Sparkline: FC<ISparklineProps> = ({ price }) => {
  const time = Array(price.length).fill(0).map((_, i) => i);
  const dataPrice = price?.length ? [...price] : [];
  const chartData = {
    labels: time,
    datasets: [
      {
        fill: true,
        tension: 0.75,
        label: "$",
        data: dataPrice,
        borderColor: '#7878FF',
        borderWidth: 1.5,
        pointRadius: 0,
        backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(116, 116, 250, 0.95)');
            gradient.addColorStop(0.15, "rgba(120, 120, 250, 0)");
            return gradient;
        },
      },
    ],
  };
  
  return (
    <StyledSparklineWrapper>
        <Line options={options} data={chartData} width={120} height={37} />
    </StyledSparklineWrapper>
  );
};
