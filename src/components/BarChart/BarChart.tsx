import { FC } from 'react';
import { MEDIA_SIZES } from 'constants/mediaSizes';

import { useResize } from 'hooks/useResize';

import { useTheme } from 'styled-components';

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
    const { width } = useResize();
    const theme = useTheme();
    const data = {
        labels: firstCoinData.map(item => item[0]),
        datasets: [
            {
                label: coinFirst,
                backgroundColor: theme.chartGradientSecondary.backgroundColor,
                data: firstCoinData.map(item => item[1]),
                borderColor: theme.chartSecondary,
                yAxisID: "y-axis-1",
                order: 1,
                fill: true,
            },
            {
                label: coinSecond,
                data: secondCoinData?.map(item => item[1]),
                borderColor: theme.chartPrimary,
                backgroundColor: theme.chartGradientPrimary.backgroundColor,
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
                maxTicksLimit: 6,
                maxRotation: 0,
                align: "inner" as "inner",  
              },
              grid: {
                display: false,
              },
              stacked: true
            },
            y: {
               
                ticks: {
                  display: false,
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
              
            }
        },
        plugins: {
          legend: {
            display: width >= MEDIA_SIZES.SM && secondCoinData && secondCoinData.length > 1,
            position: 'bottom' as const,
            labels: {
                boxWidth: 24,
                boxHeight: 23,
                color: '#7878FF',
                font: { size: 20 },
                borderRadius: 0,
            },
        },
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