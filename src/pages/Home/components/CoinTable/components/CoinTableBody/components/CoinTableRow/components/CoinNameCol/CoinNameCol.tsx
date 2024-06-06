import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledCoinLogo, StyledCoinNameCol, StyledCoinName } from './StyledCoinNameCol';

import { ICoinNameProps } from '../../../../types';

export const CoinNameCol: FC<ICoinNameProps> = ({ name, image, symbol }) => {
    const navigate = useNavigate();

    return (
        <StyledCoinNameCol>
            <button className='col-wrapper' onClick={() => navigate(`/coin-page/${name.toLowerCase()}`)}>
                <StyledCoinLogo src={image} alt='CoinLogo'/>
                <StyledCoinName><span>{name}</span> <span>({symbol})</span></StyledCoinName>
            </button>
        </StyledCoinNameCol>
    )
};
