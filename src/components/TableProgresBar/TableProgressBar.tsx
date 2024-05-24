import { FC } from 'react';

import { StyledTableProgressLabel, StyledBar } from './StyledTableProgressBar';

interface TableProgressBarProps {
    value: number;
    max: number;
    marginTop ?: string;
};

export const TableProgressBar: FC<TableProgressBarProps> = ({ value, max, marginTop  }) => {
    const formattedValue = (value / Math.pow(10, 9)).toFixed(2);
    const formattedMax = (max / Math.pow(10, 9)).toFixed(2);

    return (
        <div style={{ marginTop: marginTop || '0px' }}>
            <StyledTableProgressLabel>
                <span>{formattedValue}</span>
                <span>{formattedMax}</span>
            </StyledTableProgressLabel>
            <StyledBar value={value} max={max}></StyledBar>
        </div>
    );
};