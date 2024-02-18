import { Line } from 'react-chartjs-2';
import { FC } from 'react';
import { useAppSelector } from 'hooks/reduxHooks';
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
    Filler
  } from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
);
   
interface ILineChartProps {
    firstCoinData: Array<Array<number>>;
    secondCoinData?: Array<Array<number>>;
    coinFirst: string,
    coinSecond: string
};

export const options = {
    responsive: true,
    scales: {
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        x: {
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

export const LineChart: FC<ILineChartProps> = ({ firstCoinData, secondCoinData, coinFirst, coinSecond }) => {

    const data = {
        labels: firstCoinData.map(item => item[0]),
        datasets: [
            {
                label: coinFirst,
                data: firstCoinData.map(item => item[1]),
                borderColor: '#7878FF',
                backgroundColor: 'rgba(43, 43, 101, 0.5)',
                fill: true,
            },
            {
                label: coinSecond,
                data: secondCoinData?.map(item => item[1]),
                borderColor: '#E771FF',
                backgroundColor: '#612d6b',
                fill: true,
            }
        ],
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
