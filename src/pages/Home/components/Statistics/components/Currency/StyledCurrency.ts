import styled from 'styled-components';

import { ICurrencyProps } from './Currency';

export const StyledCurrency = styled.button<ICurrencyProps>`
    background-color: #191926;
    border-radius: 6px;
    max-width: 252px;

    & > div {
        padding: 16px;
        display: flex;
        align-items: center;

        & > img {

        }

        & > div {
            & > span:nth-child(1) {
                display: flex;
            }

            & > span:nth-child(2) {
                color: #D1D1D1;
                font-size: 14px;
            }

            & > span:nth-child(3) {
                color: ${({ condition }) => (condition ? '#00F5E4' : '#FF0061')}
            }
        }
    }
`