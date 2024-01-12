import { StyledHeader } from './StyledHeader';
import { Container } from 'components/Container';
import { NavList } from './components/NavList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Nav } from './components/Nav';
import { Currency } from './components/Currency';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Sun } from 'assets/svg/sun';

// interface IHeader {
//     children: ReactNode,
// };

export const Header = () => (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo />
                <NavList />   
                <SearchForm />
                <Currency />
                <Button type="button" disabled={false} padding='11px' backgroundColor='#191926'>
                    <Sun />
                </Button> 
            </Nav>
        </Container>
    </StyledHeader>
);