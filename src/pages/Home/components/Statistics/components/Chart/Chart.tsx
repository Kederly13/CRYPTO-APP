import { Line } from 'react-chartjs-2';
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

import { StyledChart } from './StyledChart';
import { UpperBlock } from './components/UpperBlock/UpperBlock';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
    responsive: true,
  };

interface IChartProps {
  coinData: Array<Array<number>>;
  headline: string;
  number: number;
};

export const Chart: FC<IChartProps> = ({ coinData, headline, number }) => {
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
    <StyledChart>
      <div>
          <UpperBlock
            headline={headline}
            number={number}
          />
          <Line 
            options={options} 
            data={data}
            height={193}
            width={582}
          />
      </div>
      <div>
          <UpperBlock
            headline='Volume'
            number={number}
          />
          <Bar
            data={data}
            options={options}
          />
      </div>
    </StyledChart>
  )
};