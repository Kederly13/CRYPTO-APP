import { useState } from "react";

import { ConvertorCoin } from "./components/ConvertorCoin";
import { StyledConvertorCoinWrapper, StyledConvertorWrapper, StyledSwithcWrapper } from "./StyledConvertorWrapper";
import { selectCoinList } from "store/slices/coinsSlice/coinSlice";
import { ICoin } from "types/coinType";
import { useTheme } from 'styled-components';
import { useSelectedObjSearchParams } from "hooks/useSelectedSearchParams";
import { currencyData } from "Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData";

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

import { ReactComponent as Switch } from 'assets/svg/switch.svg';

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

interface ISelectedCoins {
    firstCoin: ICoin;
    secondCoin: ICoin;
};

export const ConvertorWrapper = () => {
    const coinsList = useAppSelector(selectCoinList);
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const theme = useTheme();

    const [selectedCoins, setSelectedCoins] = useState<ISelectedCoins>({
        firstCoin: coinsList[0], 
        secondCoin: coinsList[1],
    });

    const { currency } = objSearchParams;
    const foundCurrency = currencyData.find(item => item.value === currency);
    const currencySymbol = foundCurrency ? foundCurrency.symbol : '';

    return (
        <StyledConvertorWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundPrimary}>
                <ConvertorCoin
                    heading='You sell' 
                    coins={coinsList}
                    selectedCoin={selectedCoins.firstCoin}
                />
            </StyledConvertorCoinWrapper>
            <StyledSwithcWrapper type='button'>
                <Switch />
            </StyledSwithcWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundSecondary}>    
                <ConvertorCoin
                    heading='You buy' 
                    coins={coinsList}
                    selectedCoin={selectedCoins.secondCoin}
                />
            </StyledConvertorCoinWrapper>
        </StyledConvertorWrapper>
    )
}