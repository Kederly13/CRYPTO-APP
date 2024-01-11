import { StyledHeader } from './StyledHeader';
import { Container } from 'components/Container';
import { NavList } from './components/NavList';
import { Nav } from './components/Nav';
import { Logo } from 'components/Logo';
// interface IHeader {
//     children: ReactNode,
// };

export const Header = () => (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo />
                <NavList />   
            </Nav>
        </Container>
    </StyledHeader>
);