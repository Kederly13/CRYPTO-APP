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
    coinData: Array<Array<number>>;
};

export const options = {
    responsive: true,
};
  
export const BarChart: FC<IBarChartProps> = ({ coinData }) => {
    const data = {
        labels: coinData.map(item => item[0]),
        datasets: [
            {
                backgroundColor: '#A75EE0',
                data: coinData.map(item => item[1]),
                borderColor: '#A75EE0'
            },
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