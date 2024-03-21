import { FC } from 'react';

import { StyledCoinLogo, StyledCoinNameCol, StyledCoinName } from './StyledCoinNameCol';

import { ICoinNameProps } from '../../../../types';

export const CoinNameCol: FC<ICoinNameProps> = ({ name, image, symbol }) => (
    <StyledCoinNameCol>
        <StyledCoinLogo src={image} alt='CoinLogo'/>
        <StyledCoinName>{name} ({symbol})</StyledCoinName>
    </StyledCoinNameCol>
);
