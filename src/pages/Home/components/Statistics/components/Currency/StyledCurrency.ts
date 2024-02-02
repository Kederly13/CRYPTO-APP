import styled from 'styled-components';

import { IStyledCurrencyProps } from './Currency';


export const StyledCurrency = styled.div<IStyledCurrencyProps>`
    background: ${({ selected }) => (selected ? '#7878FF' : '#191926')};
    /* background: rgba(97, 97, 222, 0.50);
    border: 1px solid #7878FF; */
    max-width: 252px;
    padding: 16px;
    display: flex;
    align-items: center;

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