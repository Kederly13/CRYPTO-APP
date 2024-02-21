import { FC } from 'react';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
  } from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);
   
interface IBarChartProps {
  firstCoinData: Array<Array<string | number>>;
  secondCoinData?: Array<Array<string | number>>;
  coinFirst: string,
  coinSecond: string
};

export const BarChart: FC<IBarChartProps> = ({ firstCoinData, secondCoinData, coinFirst, coinSecond }) => {
    const data = {
        labels: firstCoinData.map(item => item[0]),
        datasets: [
            {
                label: coinFirst,
                backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(116, 116, 250, 0.95)');
                    gradient.addColorStop(0.3, 'rgba(116, 116, 250, 0.70)');
                    gradient.addColorStop(0.7, 'rgba(116, 116, 250, 0.40)');
                    gradient.addColorStop(1, 'rgba(10, 10, 20, 0.01)');
                    return gradient;
                },
                data: firstCoinData.map(item => item[1]),
                borderColor: '#7878FF',
                yAxisID: "y-axis-1",
                order: 1,
                fill: true,
            },
            {
                label: coinSecond,
                data: secondCoinData?.map(item => item[1]),
                borderColor: '#E771FF',
                backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(231, 114, 255, 0.90)');
                    gradient.addColorStop(0.4, 'rgba(231, 114, 255, 0.60)');
                    gradient.addColorStop(0.6, 'rgba(231, 114, 255, 0.30)');
                    gradient.addColorStop(1, 'rgba(231, 114, 255, 0.01)');
                    return gradient;
                },
                yAxisID: "y-axis-2",
                order: 2,
                fill: true,
            }
        ],
    };

     const options = {
        responsive: true,
        scales: {
            x: {
              ticks: {
                maxTicksLimit: 12
              },
              grid: {
                display: false,
              },
            },
            y: {
                stacked: true,  
                ticks: {
                  display: false,
                },
              },
          
            "y-axis-1": {
              display: false,
              ticks: {
                display: false,
              },
              stacked: true
            },
            "y-axis-2": {
              display: false,
              ticks: {
                display: false,
              },
              stacked: true
            }
        },
        plugins: {
            legend: {
                position: 'bottom' as const,
                display: secondCoinData && secondCoinData?.length > 1 ? true : false,
                labels: {
                    boxWidth: 24, 
                    boxHeight: 23, 
                    color: '#7878FF',
                    font: {
                        size: 20 
                    },
                    borderRadius: 0,
                }
            }
        }
    };

    return (
        <Bar 
            options={options} 
            data={data}
            height={193}
            width={582}
        />
    );
};