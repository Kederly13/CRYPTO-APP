import { FC } from 'react';

import { StyledCoinHeading, StyledCoin, StyledCoinName, StyledCoinSymbol, StyledCoinPrice, StyledConvertorCoin } from './StyledConvertorCoin';
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

interface IConvertorCoin {
    name: string,
    symbol: string,
    image: string,
    heading: string,
    current_price: string
};

//title
export const ConvertorCoin: FC<IConvertorCoin> = ({ name, symbol, image, heading, current_price }) => {
    return (
        <StyledConvertorCoin>
            <StyledCoinHeading>{heading}</StyledCoinHeading>
            <StyledCoin>
                <img src={image} />
                <StyledCoinName>{name}</StyledCoinName>
                <StyledCoinSymbol>({symbol.toUpperCase()})</StyledCoinSymbol>
                <Arrow />
            </StyledCoin>
            <StyledCoinPrice>1 {symbol} = {current_price}</StyledCoinPrice>
        </StyledConvertorCoin>
    )
}