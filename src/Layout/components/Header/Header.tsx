import { ReactNode } from 'react';

import { StyledHeader } from './StyledHeader';
import { Container } from 'components/Container';
import { NavList } from './components/Nav/NavList';
import { Nav } from './components/Nav';

// interface IHeader {
//     children: ReactNode,
// };

export const Header = () => (
    <StyledHeader>
        <Container>
            <Nav>
                <NavList>
                    
                </NavList>
            </Nav>
        </Container>
    </StyledHeader>
);