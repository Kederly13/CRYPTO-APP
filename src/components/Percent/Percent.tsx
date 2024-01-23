import { FC } from 'react';

import { StyledPercent } from './StyledPercent';

import { ArrowDown } from 'assets/svg/arrowDown';
import { ArrowUp } from 'assets/svg/arrowUp';

interface IPercentProps {
    // percent: number;
    children: React.ReactNode;
};

interface IStyledPercentProps {
    marginLeft?: string;
    marginRight?: string;
};

export type PercentProps = IPercentProps & IStyledPercentProps;

export const Percent: FC<PercentProps> = ({ children, ...props }) => (
    <StyledPercent {...props}>
        {children}
    </StyledPercent>
);