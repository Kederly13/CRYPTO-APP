import { useLocation } from 'react-router-dom';

import { Container } from 'components/Container';
import { NavList } from './components/NavList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Nav } from './components/Nav';
import { Currency } from './components/Currency';
import { Logo } from 'components/Logo';
import { HeaderTop } from './components/HeaderTop';
import { SearchButton } from './components/SearchButton';
import { ThemeBtn } from './components/ThemeBtn';

import { StyledHeader } from './StyledHeader';

export const Header = () => {
     
    return (
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

};