import { FC } from 'react';

import { StyledCoinLogo, StyledCoinNameCol, StyledCoinName } from './StyledCoinNameCol';

import { ICoinNameProps } from '../../../../types';

export const CoinNameCol: FC<ICoinNameProps> = ({ name, image, symbol }) => (
    <StyledCoinNameCol>
        <div className='col-wrapper'>
            <StyledCoinLogo src={image} alt='CoinLogo'/>
            <StyledCoinName><span>{name}</span> <span>({symbol})</span></StyledCoinName>
            
        </div>
    </StyledCoinNameCol>
);
