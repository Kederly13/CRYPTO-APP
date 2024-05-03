import { FC, useState } from 'react';

import { StyledCoinHeading, StyledCoin, StyledCoinName, StyledCoinSymbol, StyledCoinPrice, StyledConvertorCoin, StyledWrapper } from './StyledConvertorCoin';
import { ICoin } from 'types/coinType';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';
import { ConvertorInput } from '../ConvertorInput';

import { ConvertorMenu } from './components/ConvertorMenu';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

interface IConvertorCoin {
    coins: ICoin[],
    selectedCoin: ICoin,
    heading: string,
    handleSelectedCoin: (coinName: string) => void,
    handleInputChange: (value: string) => void,
    inputValue: string,
    readOnly?: boolean
};

export const ConvertorCoin: FC<IConvertorCoin> = ({ coins, selectedCoin, heading, handleSelectedCoin, handleInputChange, inputValue, readOnly }) => {
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
            <StyledWrapper>
                <StyledCoin type='button' onClick={handleActiveMenu}>
                    <img src={image} />
                    <StyledCoinName>{name}</StyledCoinName>
                    <StyledCoinSymbol>({symbol?.toUpperCase()})</StyledCoinSymbol>
                    <Arrow />
                </StyledCoin>
                <ConvertorInput
                     handleInputChange={handleInputChange}
                     inputValue={inputValue}
                     readOnly={readOnly}
                />
            </StyledWrapper>

            {isActiveMenu &&
                <ConvertorMenu coinList={coinsNames} selectedCoin={name} handleSelectedCoin={handleSelectedCoin}  handleActiveMenu={handleActiveMenu}/>
            }
            <StyledCoinPrice>1 {symbol} = {currencySymbol}{current_price}</StyledCoinPrice>
        </StyledConvertorCoin>
    )
}