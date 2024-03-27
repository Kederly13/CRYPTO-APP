import { useAppDispatch } from 'hooks/reduxHooks';
import { useEffect } from 'react';

import { StyledHeaderTop, StyledHeaderWrapper } from "./StyledHeaderTop";
import { useAppSelector } from "hooks/reduxHooks";
import { selectCoinList } from "store/slices/coinSlice";
import { selectCoinsHistory } from "store/slices/coinsHistory/coinsHistorySlice";
import { fetchMarketData } from 'store/slices/marketData/marketDataSlice';

import { Flash } from "assets/svg/flash";
import { Exchange } from "assets/svg/exchange";


import { selectMarketData } from "store/slices/marketData/marketDataSlice";

export const HeaderTop = () => {
    const dispatch = useAppDispatch();
    const marketData = useAppSelector(selectMarketData);


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

    return (
        <StyledHeaderTop>
            <StyledHeaderWrapper>
                <div>
                    <Flash /> Coin 
                    <span>{marketData?.active_cryptocurrencies}</span>
                </div>
                <div>
                    
                </div>
                <div>
                    
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