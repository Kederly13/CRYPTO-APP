import { FC } from 'react';
import { StyledSparkline } from './StyledSparkline';

import { ISparklineProps } from '../../../../types';

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

export const Sparkline: FC<ISparklineProps> = ({ sparkline_in_7d }) => {
    console.log(sparkline_in_7d)
    const data = {
        datasets: [
            { 
                data: [12, 15, 77, 77, 88],
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
                display: false
            },
            tooltip: { 
                enabled: false
            }
        }
    };

    return (
        <StyledSparkline
            options={options} 
            data={data}
            height={37}
            width={120}
        />  
    );
};
