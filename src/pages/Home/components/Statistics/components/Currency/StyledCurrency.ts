import styled from 'styled-components';

import { IStyledCurrencyProps } from './Currency';

export const StyledCurrencyWrapper = styled.div`
    margin-left: 15px;

    @media(max-width: 1200px) {
        display: none;
    }
    
`
export const StyledCurrencyName = styled.div`
    color: #FFF;
    display: flex;
`
export const StyledCurrencyPriceWrapper = styled.div`
    display: flex;
    margin-top: 5px;
`
export const StyledCurrencyPrice = styled.span`
    color: #D1D1D1;
    font-size: 14px;
`
export const StyledCurrency = styled.div<IStyledCurrencyProps>`
    background: ${({ $selected }) => ($selected ? 'rgba(97, 97, 222, 0.50)' : '#191926')};
    border: ${({ $selected }) => ($selected ? '1px solid #7878FF' : '')};
    box-shadow: ${({ $selected}) => ($selected ? '4px 4px 20px 8px rgba(120, 120, 255, 0.15)' : '')};
    max-width: 252px;
    padding: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 6px;

    .currencyLogo {
        width: 32px;
        height: 32px;
    }
`                                                                                                                                                                                                       