import styled from 'styled-components';

import { ICoinNameProps } from './CoinNameCol';

export const StyledCoinNameCol = styled.td<ICoinNameProps>`
    width: 208px;
`

export const StyledCoinLogo = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 15px;
`

export const StyledCoinName = styled.span`
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
`
