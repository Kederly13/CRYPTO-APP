import { Line } from 'react-chartjs-2';
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
   
interface ILineChartProps {
    coinData: Array<Array<number>>;
};

export const options = {
    responsive: true,
};
  
export const LineChart: FC<ILineChartProps> = ({ coinData }) => {
    const data = {
        labels: coinData.map(item => item[0]),
        datasets: [
            {
                data: coinData.map(item => item[1]),
                borderColor: '#7878FF'
            },
        ],
    };

    return (
        <Line 
            options={options} 
            data={data}
            height={193}
            width={582}
        />
    );
};