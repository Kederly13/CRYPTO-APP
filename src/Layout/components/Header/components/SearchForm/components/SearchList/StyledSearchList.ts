import styled from "styled-components";

export const StyledSearchList = styled.ul`
    position: absolute;
    /* z-index: 150; */
    top: 100;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.currencyMenu.background};
    border-radius: 6px; // not working
    color: inherit;
`