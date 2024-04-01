import { useAppDispatch } from 'hooks/reduxHooks';
import { useEffect } from 'react';

import { StyledHeaderTop, StyledHeaderWrapper, StyledCoins, StyledExchange, StyledMarketCap, StyledMarketCapPercentage } from "./StyledHeaderTop";
import { useAppSelector } from "hooks/reduxHooks";
import { selectCoinList, selectLastCoinList } from "store/slices/coinsSlice/coinSlice";
import { selectCoinsHistory } from "store/slices/coinsHistory/coinsHistorySlice";
import { fetchMarketData } from 'store/slices/marketData/marketDataSlice';

import { Flash } from "assets/svg/flash";
import { Exchange } from "assets/svg/exchange";
import { ArrowDown } from 'assets/svg/arrowDown';
import { ArrowUp } from 'assets/svg/arrowUp';

import { selectMarketData } from "store/slices/marketData/marketDataSlice";

export const HeaderTop = () => {
    const dispatch = useAppDispatch();
    const marketData = useAppSelector(selectMarketData);
    const coinList = useAppSelector(selectLastCoinList);

    const bitcoin = coinList.find(({ id }) => id === 'bitcoin');
    const bitcoinUrl = bitcoin?.image;

    const ethereum = coinList.find(({ id }) => id === 'ethereum');
   
    const ethereumUrl = ethereum?.image;

    // console.log(marketData)

    const formatNumber = (number: number) => {
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixIndex = 0;
    
        while (Math.abs(number) >= 1000 && suffixIndex < suffixes.length - 1) {
            number /= 1000;
            suffixIndex++;
        }
        
        const roundedNumber = +number.toFixed(2);
        
        return `${roundedNumber}${suffixes[suffixIndex]}`;
    };

    useEffect(() => {
        if (marketData) return;

        const controller = new AbortController();

        (async () => {
            await dispatch(fetchMarketData(controller));
        })();

        return () => {
            controller.abort();
        }
        
    }, []);

    let btcMarketCap;
    let btcMarketCapNumber: number | undefined;

    if (marketData?.total_market_cap.btc) {
        btcMarketCap = formatNumber(marketData?.total_market_cap.btc);
        btcMarketCapNumber = parseFloat(btcMarketCap);
    }
   
    return (
        <StyledHeaderTop>
            <StyledHeaderWrapper>
                <StyledCoins>
                    <Flash />Coin 
                    <span>{marketData?.active_cryptocurrencies}</span>
                </StyledCoins>
                <StyledExchange>
                    <Exchange />Exchange
                    <span>{marketData?.ended_icos}</span>
                </StyledExchange>
                <StyledMarketCap>
                    {btcMarketCapNumber !== undefined && btcMarketCapNumber > 0 ? <ArrowUp /> : <ArrowDown />}
                    <span>{btcMarketCap}</span>
                </StyledMarketCap>
                <StyledMarketCapPercentage>
                    <img src={bitcoinUrl} alt='bitcoin'/>
                    <span>{marketData?.market_cap_percentage.btc && Math.floor(marketData?.market_cap_percentage.btc)}%</span>
                    <progress value={marketData?.market_cap_percentage.btc} max={100}></progress>
                </StyledMarketCapPercentage>
                <StyledMarketCapPercentage>
                    <img src={ethereumUrl} alt='ethereum'/>
                    <span>{marketData?.market_cap_percentage.eth && Math.floor(marketData?.market_cap_percentage.eth)}%</span>
                    <progress value={marketData?.market_cap_percentage.eth} max={100}></progress>
                </StyledMarketCapPercentage>
            </StyledHeaderWrapper>
        </StyledHeaderTop>
    )
};