import { FC, useState } from 'react';

import { StyledCoinHeading, StyledCoin, StyledCoinName, StyledCoinSymbol, StyledCoinPrice, StyledConvertorCoin } from './StyledConvertorCoin';
import { ICoin } from 'types/coinType';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { ConvertorMenu } from './components/ConvertorMenu';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

interface IConvertorCoin {
    coins: ICoin[],
    selectedCoin: ICoin,
    heading: string,
};

export const ConvertorCoin: FC<IConvertorCoin> = ({ coins, selectedCoin, heading }) => {
    const [isActiveMenu, setActiveMenu] = useState(false);
    
    const { objSearchParams } = useSelectedObjSearchParams();

    const currencyObj  = currencyData.find(item => item.value === objSearchParams.currency);
    const currencySymbol = currencyObj?.symbol || '';

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
            <StyledCoinPrice>1 {symbol} = {currencySymbol}{current_price}</StyledCoinPrice>
        </StyledConvertorCoin>
    )
}