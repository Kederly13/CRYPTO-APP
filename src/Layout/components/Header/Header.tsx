import { useState } from 'react';

import { Container } from 'components/Container';
import { NavList } from './components/NavList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Nav } from './components/Nav';
import { Currency } from './components/Currency';
import { HeaderTop } from './components/HeaderTop';
import { SearchButton } from './components/SearchButton';
import { ThemeBtn } from './components/ThemeBtn';
import { Logo } from 'components/Logo';
import { ModalSearch } from './components/ModalSearch/ModalSearch';

import { StyledHeader } from './StyledHeader';

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);

    const handleSearchButtonClick = () => {
        setActiveMenu(!activeMenu);
        console.log(activeMenu)
    };

    return (
        <StyledHeader>
            {activeMenu && (
                <ModalSearch
                    closeModal={handleSearchButtonClick} 
                />
            )}
            <HeaderTop />
            <Container>
                <Nav>
                    <Logo />
                    <NavList />   
                    <SearchForm />
                    <SearchButton handleClick={handleSearchButtonClick}/>
                    <Currency />
                    <ThemeBtn />
                </Nav>
            </Container>
        </StyledHeader>
    )
}