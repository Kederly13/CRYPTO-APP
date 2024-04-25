import { useEffect, useState } from 'react';

import { ICoin } from 'types/coinType';
import { SEARCH_PARAMS } from 'constants/searchParams';

import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { ConvertorCoin } from './components/ConvertorCoin';

import { useAppSelector } from 'hooks/reduxHooks';
import { useTheme } from 'styled-components';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { StyledSwithcWrapper, StyledConvertorSection, StyledHeading, StyledDateTime, StyledConvertorWrapper, StyledConvertorCoinWrapper } from './StyledConvertorSection';
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';
import { getDateTime } from 'utils/getDateTime';
import { ReactComponent as Switch } from 'assets/svg/switch.svg';

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

interface ISelectedCoins {
    firstCoin: ICoin;
    secondCoin: ICoin;
};

export const ConvertorSection = () => {
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const coinsList = useAppSelector(selectCoinList);
    const firstCoin = coinsList[0];
    const secondCoin = coinsList[1];

    const { currency } = objSearchParams;
    const foundCurrency = currencyData.find(item => item.value === currency);
    const currencySymbol = foundCurrency ? foundCurrency.symbol : '';


    const [selectedCoins, setSelectedCoins] = useState<ISelectedCoins>({firstCoin, secondCoin});

    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                [SEARCH_PARAMS.CURRENCY]: 'usd',
            });
        };
    }, [])

    const currentDayTime = getDateTime();
    const theme = useTheme();

    return (
        <StyledConvertorSection>
            <StyledHeading>
                Online currency convertor
            </StyledHeading>
            <StyledDateTime>
                {currentDayTime}
            </StyledDateTime>
            <StyledConvertorWrapper>
                <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundPrimary}>
                    <ConvertorCoin
                        heading='You sell'  
                        name={selectedCoins?.firstCoin?.name} 
                        symbol={selectedCoins?.firstCoin?.symbol} 
                        image={selectedCoins?.firstCoin?.image}
                        current_price={currencySymbol + selectedCoins?.firstCoin?.current_price?.toFixed(2)}  
                    />
                </StyledConvertorCoinWrapper>
                <StyledSwithcWrapper type='button'>
                    <Switch />
                </StyledSwithcWrapper>
                <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundSecondary}>    
                    <ConvertorCoin
                        heading='You buy' 
                        name={selectedCoins?.secondCoin?.name} 
                        symbol={selectedCoins?.secondCoin?.symbol} 
                        image={selectedCoins?.secondCoin?.image} 
                        current_price={currencySymbol + selectedCoins?.secondCoin?.current_price?.toFixed(2)} 
                    />
                </StyledConvertorCoinWrapper>
            </StyledConvertorWrapper>
        </StyledConvertorSection>
    )
};