import { FC } from 'react';

import { StyledPercent } from './StyledPercent';

import {ReactComponent as ArrowUp} from 'assets/svg/arrowUp.svg';
import {ReactComponent as ArrowDown} from 'assets/svg/arrowDown.svg';

interface IPercentProps {
    $percent: number;
};

interface IStyledPercentProps {
    $ml?: string;
    marginRight?: string;
};

export type PercentProps = IPercentProps & IStyledPercentProps;

export const Percent: FC<PercentProps> = ({ $percent, ...props }) => {
    const percentStr = $percent?.toFixed(2); // Add optional chaining here

    return (
        <StyledPercent $percent={$percent} {...props}>
            {$percent && $percent < 0 ? <ArrowDown /> : <ArrowUp />} {/* Add $percent check here */}
            <span>{percentStr} %</span>
        </StyledPercent>
    );
};
