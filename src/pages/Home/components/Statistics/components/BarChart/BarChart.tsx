import { Bar } from 'react-chartjs-2';
import { FC } from 'react';

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
    firstCoinData: Array<Array<number>>;
    secondCoinData: Array<Array<number>>;
};

export const options = {
    responsive: true,
    
    scales: {
        y: {
            stacked: true,
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        x: {
            stacked: true,
            grid: {
                display: false
            }
        },
    },
    plugins: {
        legend: {
            position: 'bottom' as const,
            display: true,
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
  
export const BarChart: FC<IBarChartProps> = ({ firstCoinData, secondCoinData }) => {
    const data = {
        labels: firstCoinData.map(item => item[0]),
        datasets: [
            {
                backgroundColor: '#7878FF',
                data: firstCoinData.map(item => item[1]),
                borderColor: '#7878FF'
            },
            {
                data: secondCoinData?.map(item => item[1]),
                borderColor: '#E771FF',
                backgroundColor: '#E771FF',
                fill: true,
            }
        ],
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