import { FC } from 'react';

import { StyledCoinHeading, StyledCoin, StyledCoinName, StyledCoinSymbol, StyledCoinCalculator, StyledConvertorCoin } from './StyledConvertorCoin';
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

interface IConvertorCoin {
    name: string,
    symbol: string,
    image: string,
    heading: string
};
//title
export const ConvertorCoin: FC<IConvertorCoin> = ({ name, symbol, image, heading }) => {
    return (
        <StyledConvertorCoin>
            <StyledCoinHeading>{heading}</StyledCoinHeading>
            <StyledCoinCalculator>
                <StyledCoin>
                    <img src={image} />
                    <StyledCoinName>{name}</StyledCoinName>
                    <StyledCoinSymbol>{symbol}</StyledCoinSymbol>
                    <Arrow />
                </StyledCoin>
            </StyledCoinCalculator>
        </StyledConvertorCoin>
    )
}