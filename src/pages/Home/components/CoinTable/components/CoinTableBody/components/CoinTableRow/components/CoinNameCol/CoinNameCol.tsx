import { FC } from 'react';

import { StyledCoinLogo, StyledCoinNameCol, StyledCoinName } from './StyledCoinNameCol';

export interface ICoinNameProps {
    coinName: string,
    coinLogo: string,
    coinSymbol: string
};

export const CoinNameCol: FC<ICoinNameProps> = ({ coinName, coinLogo, coinSymbol }) => (
    <StyledCoinNameCol coinName={coinName} coinLogo={coinLogo} coinSymbol={coinSymbol}>
        <StyledCoinLogo>{coinLogo}</StyledCoinLogo>
        <StyledCoinName>{coinName} ({coinSymbol})</StyledCoinName>
    </StyledCoinNameCol>
);
