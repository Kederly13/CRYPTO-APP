import { FC, useState } from 'react';

import { StyledCoinHeading, StyledCoin, StyledCoinName, StyledCoinSymbol, StyledCoinPrice, StyledConvertorCoin } from './StyledConvertorCoin';
import { ICoin } from 'types/coinType';

import { ConvertorMenu } from './components/ConvertorMenu';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

interface IConvertorCoin {
    coins: ICoin[],
    selectedCoin: ICoin,
    heading: string,
    // name: string,
    // symbol: string,
    // image: string,
    // heading: string,
    // current_price: string
};

export const ConvertorCoin: FC<IConvertorCoin> = ({ coins, selectedCoin, heading }) => {
    const [isActiveMenu, setActiveMenu] = useState(false);

    const { name, symbol, image, current_price } = selectedCoin;
    const coinsNames = coins.map(coin => coin.name);

    const handleActiveMenu = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <StyledConvertorCoin>
            <StyledCoinHeading>{heading}</StyledCoinHeading>
            <StyledCoin type='button' onClick={handleActiveMenu}>
                <img src={image} />
                <StyledCoinName>{name}</StyledCoinName>
                <StyledCoinSymbol>({symbol?.toUpperCase()})</StyledCoinSymbol>
                <Arrow />
                
            </StyledCoin>
            {isActiveMenu &&
                <ConvertorMenu coinList={coinsNames} selectedCoin={name}/>
            }
            <StyledCoinPrice>1 {symbol} = {current_price}</StyledCoinPrice>
        </StyledConvertorCoin>
    )
}