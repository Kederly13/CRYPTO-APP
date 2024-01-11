import { FC, ReactNode } from 'react';

import { StyledNav } from './StyledNav'

interface INav {
    children: ReactNode,
};

export const Nav: FC<INav> = ({ children }) => (
    <StyledNav>
        {children}
    </StyledNav>
);