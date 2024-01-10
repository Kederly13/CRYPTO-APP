import { ReactNode } from 'react';

import { StyledHeader } from './StyledHeader';
import { Container } from 'components/Container';
import { NavList } from './components/Nav/NavList';

// interface IHeader {
//     children: ReactNode,
// };

export const Header = () => (
    <StyledHeader>
        <Container>
            <NavList />
        </Container>
    </StyledHeader>
);