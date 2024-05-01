import { useState, useEffect } from "react";

import { ConvertorCoin } from "./components/ConvertorCoin";
import { StyledConvertorCoinWrapper, StyledConvertorWrapper, StyledSwithcWrapper } from "./StyledConvertorWrapper";
import { selectCoinList } from "store/slices/coinsSlice/coinSlice";
import { ICoin } from "types/coinType";
import { useTheme } from 'styled-components';
import { useSelectedObjSearchParams } from "hooks/useSelectedSearchParams";
import { currencyData } from "Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData";
import { selectLastCoinList } from "store/slices/coinsSlice/coinSlice";

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

import { ReactComponent as Switch } from 'assets/svg/switch.svg';

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

interface ISelectedCoins {
    firstCoin: ICoin | null;
    secondCoin: ICoin | null;
};

export const ConvertorWrapper = () => {
    const coinsList = useAppSelector(selectLastCoinList);
   
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const theme = useTheme();

    const [selectedCoins, setSelectedCoins] = useState<ISelectedCoins>({
        firstCoin: null, 
        secondCoin: null,
    });

    useEffect(() => {
        if (coinsList && coinsList.length > 1) {
            setSelectedCoins({
                firstCoin: coinsList[0], 
                secondCoin: coinsList[1],
            });
        }
    }, [coinsList]);
   

    // console.log(selectedCoins?.firstCoin?.current_price)
    return (
        <StyledConvertorWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundPrimary}>
                {selectedCoins && selectedCoins.firstCoin && (
                    <ConvertorCoin
                        heading='You sell' 
                        coins={coinsList}
                        selectedCoin={selectedCoins.firstCoin}
                    />
                )}
            </StyledConvertorCoinWrapper>
            <StyledSwithcWrapper type='button'>
                <Switch />
            </StyledSwithcWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundSecondary}>    
                {selectedCoins && selectedCoins.secondCoin && (
                    <ConvertorCoin
                        heading='You buy' 
                        coins={coinsList}
                        selectedCoin={selectedCoins.secondCoin}
                    />
                )}
            </StyledConvertorCoinWrapper>
        </StyledConvertorWrapper>
    )
}