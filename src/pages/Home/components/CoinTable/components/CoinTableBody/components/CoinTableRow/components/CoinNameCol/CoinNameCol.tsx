import { FC } from 'react';

import { StyledCoinLogo, StyledCoinNameCol, StyledCoinName } from './StyledCoinNameCol';

import { ICoinNameProps } from '../../../../types';

export const CoinNameCol: FC<ICoinNameProps> = ({ coinName, coinLogo, coinSymbol }) => (
    <StyledCoinNameCol>
        <StyledCoinLogo src={coinLogo} alt='CoinLogo'/>
        <StyledCoinName>{coinName} ({coinSymbol})</StyledCoinName>
    </StyledCoinNameCol>
);
