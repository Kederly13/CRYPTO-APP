import { FC } from 'react';
import { StyledLine } from './StyledLineChart';
import { useTheme } from 'styled-components';

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
    Tooltip,

);
   
interface ILineChartProps {
    firstCoinData: Array<Array<string | number>>;
    secondCoinData?: Array<Array<string | number>>;
    coinFirst: string,
    coinSecond: string
};

export const LineChart: FC<ILineChartProps> = ({ firstCoinData, secondCoinData, coinFirst, coinSecond }) => {
    const theme = useTheme();

    const data = {
        labels: firstCoinData.map(item => item[0]),
        datasets: [
            {
                label: coinFirst,
                data: firstCoinData.map(item => item[1]),
                backgroundColor: theme.chartGradientPrimary.backgroundColor,
                fill: true,
                yAxisID: 'y-axis-1',
                order: 1,
                pointRadius: 0,
                tension: 0.4,
            },
            {
                label: coinSecond,
                data: secondCoinData?.map(item => item[1]),
                backgroundColor: theme.chartGradientSecondary.backgroundColor,
                fill: true,
                yAxisID: 'y-axis-2',
                order: 2,
                pointRadius: 0,
                tension: 0.4,
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
