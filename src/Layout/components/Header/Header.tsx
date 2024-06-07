import { Container } from 'components/Container';
import { NavList } from './components/NavList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Nav } from './components/Nav';
import { Currency } from './components/Currency';
import { HeaderTop } from './components/HeaderTop';
import { SearchButton } from './components/SearchButton';
import { ThemeBtn } from './components/ThemeBtn';
import { Logo } from 'components/Logo';

import { StyledHeader } from './StyledHeader';

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
    )