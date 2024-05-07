import { useState, useEffect } from "react";

import { ConvertorCoin } from "./components/ConvertorCoin";
import { StyledConvertorCoinWrapper, StyledConvertorWrapper, StyledSwithcWrapper } from "./StyledConvertorWrapper";
import { selectCoinList } from "store/slices/coinsSlice/coinSlice";
import { ICoin } from "types/coinType";
import { useTheme } from 'styled-components';
import { useSelectedObjSearchParams } from "hooks/useSelectedSearchParams";
import { currencyData } from "Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData";
import { fetchCoinHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { selectLastCoinList } from "store/slices/coinsSlice/coinSlice";
import { ConvertorInput } from "./components/ConvertorInput";
import { selectCoinsHistory } from "store/slices/coinsHistory/coinsHistorySlice";

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

import { ReactComponent as Switch } from 'assets/svg/switch.svg';
import { SEARCH_PARAMS } from "constants/searchParams";

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

interface ISelectedCoins {
    firstCoin: ICoin | null;
    secondCoin: ICoin | null;
};

export const ConvertorWrapper = () => {
    const coinsList = useAppSelector(selectLastCoinList);
    const coinsHistory = useAppSelector(selectCoinsHistory);
    const dispatch = useAppDispatch();

    const { onSetObjSearchParams, objSearchParams } = useSelectedObjSearchParams();

    const theme = useTheme();
    
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');

    const [selectedCoins, setSelectedCoins] = useState<ISelectedCoins>({
        firstCoin: null, 
        secondCoin: null,
    });
    
    const coinsHistoryKeys = Object.keys(coinsHistory);
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;
    const coinFirst = coinsList.find(({ id }) => id === coinsHistoryFirst);
    const coinSecond = coinsList.find(({ id }) => id === coinsHistorySecond);

    const convertPrice = (quantity: string, firstPrice: number, secondPrice: number) => Number(quantity) * (firstPrice / secondPrice);

    const handleFirstInputChange = (newValue: string) => {
        setFirstInputValue(newValue);
        if (selectedCoins.firstCoin?.current_price && selectedCoins?.secondCoin?.current_price) {
            setSecondInputValue(String(convertPrice(newValue, selectedCoins.firstCoin?.current_price, selectedCoins?.secondCoin?.current_price).toFixed(2)))
        }   
    };

    const handleSecondInputChange = (newValue: string) => {
        setSecondInputValue(newValue);
        if (selectedCoins.firstCoin?.current_price && selectedCoins?.secondCoin?.current_price) {
            setFirstInputValue(String(convertPrice(newValue, selectedCoins?.secondCoin?.current_price, selectedCoins.firstCoin?.current_price).toFixed(2)))
        } 
    };
    
    const handleFirstSelectedCoin = (firstCoin: string) => {
        const newFirstCoin = coinsList.find((coin) => coin.id === firstCoin);
        const secondCoinName = selectedCoins.secondCoin?.id || '';

        onSetObjSearchParams({
            ...objSearchParams,
            [SEARCH_PARAMS.COIN]: `${firstCoin},${secondCoinName}` 
        });
        setSelectedCoins(prevState => ({
            ...prevState,
            firstCoin: newFirstCoin || null
        }));
    };

    const handleSecondSelectedCoin = (secondCoin: string) => {
        const newSecondCoin = coinsList.find((coin) => coin.id === secondCoin);
        const firstCoinName = selectedCoins.firstCoin?.id || '';

        onSetObjSearchParams({
            ...objSearchParams,
            [SEARCH_PARAMS.COIN]: `${firstCoinName},${secondCoin}`
        })
        setSelectedCoins(prevState => ({
            ...prevState,
            secondCoin: newSecondCoin || null
        }));
    };

    useEffect(() => {
        if (!objSearchParams?.coin && !objSearchParams?.days && objSearchParams?.currency) {
            return;
        };
        
        if (objSearchParams.coin && coinFirst && coinSecond)  {
            setSelectedCoins({
                firstCoin: coinFirst, 
                secondCoin: coinSecond,
            });
        }
    }, []);
    
    useEffect(() => {
        const controller = new AbortController();
        
        if (selectedCoins.firstCoin?.current_price && selectedCoins?.secondCoin?.current_price) {
            setSecondInputValue(String(convertPrice(firstInputValue, selectedCoins.firstCoin?.current_price, selectedCoins?.secondCoin?.current_price).toFixed(6)));
        }
        dispatch(fetchCoinHistory(controller));
    }, [selectedCoins, objSearchParams.currency]);
    
    return (
        <StyledConvertorWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundPrimary}>
                {selectedCoins && selectedCoins.firstCoin && (
                    <ConvertorCoin
                        heading='You sell' 
                        coins={coinsList}
                        selectedCoin={selectedCoins.firstCoin}
                        handleSelectedCoin={handleFirstSelectedCoin}
                        inputValue={firstInputValue}
                        handleInputChange={handleFirstInputChange}
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
                        handleSelectedCoin={handleSecondSelectedCoin}
                        inputValue={secondInputValue}
                        handleInputChange={handleSecondInputChange}    
                    />
                )}
            </StyledConvertorCoinWrapper>
        </StyledConvertorWrapper>
    )
};