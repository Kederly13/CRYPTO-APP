import { useRef, useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { fetchCoins } from 'store/slices/coinsSlice/coinSlice';
import { StyledCoinTableBody } from './StyledCoinTableBody';
import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { SEARCH_PARAMS } from 'constants/searchParams';

export const CoinTableBody = () => {
    const dispatch = useAppDispatch();
    const coins = useAppSelector(selectCoinList);
    console.log(coins)

    const [visibleCoins, setVisibleCoins] = useState(coins.slice(0, 10));

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams(); 
    
    const lastElement = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver>();
    // console.log(coins)

    useEffect(() => {
        const callback: IntersectionObserverCallback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                loadMoreCoins();
            }
        };

        observer.current = new IntersectionObserver(callback);

        if (lastElement.current) {
            observer.current.observe(lastElement.current);
        }

        return () => {
            if (observer.current && lastElement.current) {
                observer.current.unobserve(lastElement.current);
            }
        };
    }, [visibleCoins]);
    
    useEffect(() => {
        const payload = {
            currency: 'usd',
            page: objSearchParams.page
        }
        const controller = new AbortController();

        const updatedCoins = dispatch(fetchCoins({ payload, controller })).unwrap;
        
    },[objSearchParams.page])
    
    const loadMoreCoins = () => {
        onSetObjSearchParams({ 
            ...objSearchParams,  
            [SEARCH_PARAMS.PAGE]: String(+objSearchParams.page + 1)
        })
    };

    return (
        <>
            <StyledCoinTableBody>
                {visibleCoins.map(({ id, name, symbol, image, current_price, price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, market_cap_change_24h, market_cap, total_supply, circulating_supply, sparkline_in_7d }, index) => (
                    <CoinTableRow
                        key={id}
                        number={index}
                        image={image}
                        name={name}
                        symbol={symbol}
                        current_price={current_price}
                        price_change_percentage_1h_in_currency={price_change_percentage_1h_in_currency}
                        price_change_percentage_24h_in_currency={price_change_percentage_24h_in_currency}
                        price_change_percentage_7d_in_currency={price_change_percentage_7d_in_currency}
                        market_cap_change_24h={market_cap_change_24h}
                        market_cap={market_cap}
                        circulating_supply={circulating_supply}
                        total_supply={total_supply}
                        price={sparkline_in_7d.price}
                    />
                ))}
                {/* Sentinel element */}
                <div ref={lastElement}></div>
            </StyledCoinTableBody>
        </>
    );
};
