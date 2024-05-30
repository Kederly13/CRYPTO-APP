import { FC, ReactNode } from 'react';

import { StyledPercent } from './StyledPercent';

import {ReactComponent as ArrowUp} from 'assets/svg/arrowUp.svg';
import {ReactComponent as ArrowDown} from 'assets/svg/arrowDown.svg';

interface IPercentProps {
    $percent: number;
};

interface IStyledPercentProps {
    $ml?: string;
    marginRight?: string;
    children?: ReactNode
};

export type PercentProps = IPercentProps & IStyledPercentProps;

export const Percent: FC<PercentProps> = ({ $percent, children, ...props }) => {
    const percentStr = $percent?.toFixed(2);

    return (
        <StyledPercent $percent={$percent} {...props}>
            {$percent && $percent < 0 ? <ArrowDown /> : <ArrowUp />} {/* Add $percent check here */}
            <span>
                {percentStr}{children}
            </span>
        </StyledPercent>
    );
};
