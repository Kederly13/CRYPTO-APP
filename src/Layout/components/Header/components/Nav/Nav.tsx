import { FC, ReactNode } from 'react';

import { StyledNav } from './StyledNav'
import { NavList } from './NavList';

interface INav {
    children: ReactNode,
};

export const Nav: FC<INav> = ({ children }) => (
    <StyledNav>
        {children}
    </StyledNav>
);