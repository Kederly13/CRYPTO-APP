import styled from 'styled-components';
import { IStyledCurrencyProps } from 'pages/Home/components/Statistics/components/Currency/Currency';

export const StyledCurrencyMenu = styled.ul`
    position: absolute;
    /* z-index: 150; */
    top: 100;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: #191926;
    color: inherit;
`;

export const StyledCurrencyButton = styled.button`
    color: inherit;
`

export const StyledCurrencyListItem = styled.button<IStyledCurrencyProps>`
    color: inherit;
    background: ${({ $selected }) => ($selected ? 'rgba(97, 97, 222, 0.50)' : '#191926')};
    width: 100%;
`