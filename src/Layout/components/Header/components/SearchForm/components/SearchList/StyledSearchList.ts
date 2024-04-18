import styled from "styled-components";

export const StyledSearchList = styled.ul`
    position: absolute;
    /* z-index: 150; */
    padding: 0 15px;
    top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.currencyMenu.background};
    border-radius: 6px; 
    color: inherit;
    height: 200px;
    overflow-y: auto;
`

export const StyledSearchListItem = styled.li`
    border: 1px solid transparent;
    color: ${({ theme }) => theme.periodFilter.font};
    padding: 15px 5px; 

    &:hover {
        background-color: ${({ theme }) => theme.periodFilter.selectedBackground};
        border-color: ${({ theme }) => theme.periodFilter.borderColor};
        transition: 0.5s ease; 
        cursor: pointer;
        border-radius: 6px;
        box-shadow: 4px 4px 20px 8px rgba(120, 120, 255, 0.15);
        color: ${({ theme }) => theme.periodFilter.selectedFont};
    };         
`
