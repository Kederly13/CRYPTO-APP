import { FC } from 'react';

import { StyledPercent } from './StyledPercent';

import { ArrowDown } from 'assets/svg/arrowDown';
import { ArrowUp } from 'assets/svg/arrowUp';

interface IPercentProps {
    percent: number;
};

interface IStyledPercentProps {
    ml?: string;
    marginRight?: string;
};

export type PercentProps = IPercentProps & IStyledPercentProps;

export const Percent: FC<PercentProps> = ({ percent, ...props }) => {
    const percentStr = `${percent.toFixed(2)}`;
    
    return (
        <StyledPercent percent={percent} {...props}>
            {percent < 0 ? <ArrowDown /> : <ArrowUp />}
            <span>{percentStr} %</span>
        </StyledPercent>
    );
};
