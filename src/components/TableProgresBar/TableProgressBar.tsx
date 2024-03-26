import { FC } from 'react';

import { StyledTableProgressLabel, StyledBar } from './StyledTableProgressBar';

interface TableProgressBarProps {
    value: number;
    max: number;
};

export const TableProgressBar: FC<TableProgressBarProps> = ({ value, max }) => {
    const formatNumberToCurrency = (number: number) => {
        const suffixes = ["", "K", "M", "B", "T"];
        const suffixNum = Math.floor(("" + number).length / 3);
        let shortValue = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(2));
        if (shortValue % 1 !== 0) {
            shortValue = parseFloat(shortValue.toFixed(1)); 
        }
        return shortValue + suffixes[suffixNum];
    };

    const formattedValue = formatNumberToCurrency(value);
    const formattedMax = formatNumberToCurrency(max);

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