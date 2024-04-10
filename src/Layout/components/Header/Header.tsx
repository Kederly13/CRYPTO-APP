import { StyledHeader } from './StyledHeader';
import { Container } from 'components/Container';
import { NavList } from './components/NavList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Nav } from './components/Nav';
import { Currency } from './components/Currency';
import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { Sun } from 'assets/svg/sun';
import { HeaderTop } from './components/HeaderTop';
import { SearchButton } from './components/SearchButton';
import { ThemeBtn } from './components/ThemeBtn';

export const Header = () => (
    <StyledHeader>
        <HeaderTop />
        <Container>
            <Nav>
                <Logo />
                <NavList />   
                <SearchForm />
                <SearchButton />
                <Currency />
                <ThemeBtn />
            </Nav>
        </Container>
    </StyledHeader>
);