import { useAppDispatch } from 'hooks/reduxHooks';
import { useEffect } from 'react';

import { StyledHeaderTop, StyledHeaderWrapper } from "./StyledHeaderTop";
import { useAppSelector } from "hooks/reduxHooks";
import { selectCoinList } from "store/slices/coinSlice";
import { selectCoinsHistory } from "store/slices/coinsHistory/coinsHistorySlice";
import { fetchMarketData } from 'store/slices/marketData/marketDataSlice';

import { Flash } from "assets/svg/flash";
import { Exchange } from "assets/svg/exchange";
import { Percent } from 'components/Percent';
import { getFormatedCurrency } from 'utils/getFormatedCurrency';


import { selectMarketData } from "store/slices/marketData/marketDataSlice";

export const HeaderTop = () => {
    const dispatch = useAppDispatch();
    const marketData = useAppSelector(selectMarketData);
    console.log(marketData);

    const formatNumber = (number: number) => {
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixIndex = 0;
    
        while (Math.abs(number) >= 1000 && suffixIndex < suffixes.length - 1) {
            number /= 1000;
            suffixIndex++;
        }
        
        const roundedNumber = +number.toFixed(2);
        
        return `${roundedNumber}${suffixes[suffixIndex]}`;
    }

    useEffect(() => {
        if (marketData) return;

        const controller = new AbortController();

        (async () => {
            const resMarketData = await dispatch(fetchMarketData(controller)).unwrap();
            

        })();

        return () => {
            controller.abort();
        }
        
    }, []);

    let btcMarketCap;
    if (marketData?.total_market_cap.btc) {
        btcMarketCap = formatNumber(marketData?.total_market_cap.btc);
    }
    
   
    return (
        <StyledHeaderTop>
            <StyledHeaderWrapper>
                <div>
                    <Flash /> Coin 
                    <span> {marketData?.active_cryptocurrencies}</span>
                </div>
                <div>
                    <Exchange /> Exchange
                    <span> {btcMarketCap}</span>
                </div>
                <div>
                    {/* <Percent per */}
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </StyledHeaderWrapper>
        </StyledHeaderTop>
    )
};