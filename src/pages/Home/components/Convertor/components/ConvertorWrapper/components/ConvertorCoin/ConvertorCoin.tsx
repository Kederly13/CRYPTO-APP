import { ChangeEvent, FC, useState } from 'react';

import { StyledCoinHeading, StyledCoin, StyledCoinName, StyledCoinSymbol, StyledCoinPrice, StyledConvertorCoin, StyledWrapper } from './StyledConvertorCoin';
import { ICoin } from 'types/coinType';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';
import { ConvertorInput } from '../ConvertorInput';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { ConvertorMenu } from './components/ConvertorMenu';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useResize } from 'hooks/useResize';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';


interface IConvertorCoin {
    index: number,
    coins: ICoin[],
    selectedCoin: ICoin | undefined,
    heading: string,
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string,
    inputName: string,
    readOnly?: boolean
};

export const ConvertorCoin: FC<IConvertorCoin> = ({ 
        coins,   
        heading,
        handleInputChange, 
        inputValue,
        inputName,
        readOnly,
        selectedCoin,
        index
}) => {
    const { width } = useResize();

    const [isActiveMenu, setActiveMenu] = useState(false);

    const { objSearchParams } = useSelectedObjSearchParams();

    const currencySymbol  = currencyData.find(item => item.value === objSearchParams.currency)?.symbol || '';

    const coinsNames = coins.map(coin => coin.id);

    const handleActiveMenu = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <StyledConvertorCoin>
            <StyledCoinHeading>{heading}</StyledCoinHeading>
            <StyledWrapper>
                <StyledCoin 
                    type='button' 
                    onClick={(e) => {
                        e.stopPropagation()
                        handleActiveMenu()
                }}>
                    <img src={selectedCoin?.image} alt={selectedCoin?.id} />
                    {width > MEDIA_SIZES.MD && (
                        <StyledCoinName>{selectedCoin?.id}</StyledCoinName>
                    )}
                    <StyledCoinSymbol>({selectedCoin?.symbol?.toUpperCase()})</StyledCoinSymbol>
                    <Arrow />
                </StyledCoin>
                <ConvertorInput
                     name={inputName}
                     value={inputValue}
                     handleInputChange={handleInputChange}
                     readOnly={readOnly}
                />
            </StyledWrapper>

            {isActiveMenu &&
                <ConvertorMenu index={index} coinList={coinsNames} selectedCoin={selectedCoin?.id} handleActiveMenu={handleActiveMenu}/>
            }
            <StyledCoinPrice>1 {selectedCoin?.symbol} = {currencySymbol}{selectedCoin?.current_price}</StyledCoinPrice>
        </StyledConvertorCoin>
    )
}