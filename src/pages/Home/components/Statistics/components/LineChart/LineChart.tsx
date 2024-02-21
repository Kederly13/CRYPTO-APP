import { FC } from 'react';
import { StyledLine } from './StyledLineChart';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
    LogarithmicScale
  } from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
    LogarithmicScale
);
   
interface ILineChartProps {
    firstCoinData: Array<Array<string | number>>;
    secondCoinData?: Array<Array<string | number>>;
    coinFirst: string,
    coinSecond: string
};

export const LineChart: FC<ILineChartProps> = ({ firstCoinData, secondCoinData, coinFirst, coinSecond }) => {
    const data = {
        labels: firstCoinData.map(item => item[0]),
        datasets: [
            {
                label: coinFirst,
                data: firstCoinData.map(item => item[1]),
                borderColor: '#7878FF',
                backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, 'rgba(116, 116, 250, 0.8)');
                    gradient.addColorStop(0.3, 'rgba(116, 116, 250, 0.6)');
                    gradient.addColorStop(0.7, 'rgba(116, 116, 250, 0.4)');
                    gradient.addColorStop(1, 'rgba(10, 10, 20, 0.01)');
                    return gradient;
                },
                fill: true,
                yAxisID: 'y-axis-1',
                order: 1,
                pointRadius: 0,
                tension: 0.4,
                pointStyle: "circle",
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
                fill: true,
                yAxisID: 'y-axis-2',
                order: 2,
                pointRadius: 0,
                tension: 0.4,
                pointStyle: "circle",
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
            "y-axis-1": {
              display: false,
              ticks: {
                display: false,
              },
            },
            "y-axis-2": {
              display: false,
              ticks: {
                display: false,
              },
            },
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
                    borderWidth: 0,
                    borderRadius: 0,
                }
                
            }
        }
    };

    return (
        <StyledLine
            options={options} 
            data={data}
            height={193}
            width={582}
        />  
    );
};
