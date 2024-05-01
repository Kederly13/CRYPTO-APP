import styled from 'styled-components';

interface IStyledConvertorListItem {
    $selected?: boolean;
};

export const StyledConvertorMenu = styled.ul`
    position: absolute;
    /* top: 100;
    left: 0; */
    flex-direction: column;
    /* width: 100%; */
    background-color: ${({ theme }) => theme.currencyMenu.background};
    border-radius: 6px; 
    color: inherit;
    max-height: 200px;
    overflow-y: auto;
`

export const StyledConvertorMenuButton = styled.button`
    color: inherit;
    display: block;
    margin: 0 auto;
`

export const StyledConvertorListItem = styled.li<IStyledConvertorListItem>`
    border: 1px solid transparent;
    color: ${({ theme }) => theme.periodFilter.font};
    background: ${({ $selected, theme }) => ($selected ? theme.currencyMenu.selected : theme.currencyMenu.background)};
    
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