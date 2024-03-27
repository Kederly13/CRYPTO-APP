import { FC } from 'react';

import { StyledTableProgressLabel, StyledBar } from './StyledTableProgressBar';

import { getFormatedCurrency } from 'utils/getFormatedCurrency'

interface TableProgressBarProps {
    value: number;
    max: number;
};

export const TableProgressBar: FC<TableProgressBarProps> = ({ value, max }) => {
    // const formattedValue = getFormatedCurrency(value);
    // const formattedMax = getFormatedCurrency(max);
    const formattedValue = (value / Math.pow(10, 9)).toFixed(2);
    const formattedMax = (max / Math.pow(10, 9)).toFixed(2);

    return (
        <div>
            <StyledTableProgressLabel>
                <span>{formattedValue}</span>
                <span>{formattedMax}</span>
            </StyledTableProgressLabel>
            <StyledBar value={value} max={max}></StyledBar>
        </div>
    );
};