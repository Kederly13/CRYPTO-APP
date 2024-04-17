import styled from 'styled-components';

interface IStyledCurrencyListItem {
    $selected?: boolean;
};

export const StyledCurrencyMenu = styled.ul`
    position: absolute;
    /* z-index: 150; */
    top: 100;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.currencyMenu.background};
    border-radius: 6px; // not working
    color: inherit;
`;

export const StyledCurrencyButton = styled.button`
    color: inherit;
    display: block;
    margin: 0 auto;
    padding: 10px 0;
`

export const StyledCurrencyListItem = styled.li<IStyledCurrencyListItem>`
    color: inherit;
    background: ${({ $selected, theme }) => ($selected ? theme.currencyMenu.selected : theme.currencyMenu.background)};
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`