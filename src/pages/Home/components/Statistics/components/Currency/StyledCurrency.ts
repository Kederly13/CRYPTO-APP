import styled from 'styled-components';

import { IStyledCurrencyProps } from './Currency';


export const StyledCurrency = styled.div<IStyledCurrencyProps>`
    background: ${({ selected }) => (selected ? 'rgba(97, 97, 222, 0.50)' : '#191926')};
    border: ${({ selected }) => (selected ? '1px solid #7878FF' : '')};
    box-shadow: ${({ selected}) => (selected ? '4px 4px 20px 8px rgba(120, 120, 255, 0.15)' : '')};
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

    & > div {
        margin-left: 15px;

        & > p {
            color: #FFF;
            display: flex;
        }

        & > div {
            display: flex;
            margin-top: 5px;

            & > span:nth-child(1) {
                color: #D1D1D1;
                font-size: 14px;
            }
        }                                                                                                                                                           
    }
`                                                                                                                                                                                                       