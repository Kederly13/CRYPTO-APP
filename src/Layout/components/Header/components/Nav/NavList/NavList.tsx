import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { StyledNavList } from './StyledNavList';

export const NavList: FC = () => (
    <StyledNavList>
        <li>
            <Link to='/'>
                home
            </Link>
        </li>
        <li>
            <Link to='/'>
                <span>
                    home
                </span>
            </Link>
        </li>
    </StyledNavList>
);