import { useRef, useEffect, useState } from 'react';
import { useAppDispatch } from 'hooks/reduxHooks';
import { fetchCoins } from 'store/slices/coinsSlice/coinSlice';
import { StyledCoinTableBody } from './StyledCoinTableBody';
import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinList, selectLoading, selectPage } from 'store/slices/coinsSlice/coinSlice';
import { selectMarketData } from 'store/slices/marketData/marketDataSlice';
import { nextPage } from 'store/slices/coinsSlice/coinSlice';

import { useAppSelector } from 'hooks/reduxHooks';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useScrollPagination } from 'hooks/useScrollPagination';

import { SEARCH_PARAMS } from 'constants/searchParams';

export const CoinTableBody = () => {
    const dispatch = useAppDispatch();

    const coins = useAppSelector(selectCoinList);
    const loading = useAppSelector(selectLoading);
    const marketData = useAppSelector(selectMarketData);
    const pageNum = useAppSelector(selectPage);

    const coinsTotal = marketData?.active_cryptocurrencies;

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const loadMoreCoins = () => {
        dispatch(nextPage());
        // onSetObjSearchParams({ 
        //     ...objSearchParams,  
        //     [SEARCH_PARAMS.PAGE]: String(+objSearchParams.page + 1)
        // })

        const payload = {
            currency: objSearchParams.currency,
            page: String(pageNum + 1)
        };

        const controller = new AbortController();

        dispatch(fetchCoins({ payload, controller }));
    };
    
    const lastElement = useScrollPagination(
        loadMoreCoins, loading, coins.length != coinsTotal
    );
    
    return (
        <>
            <StyledCoinTableBody>
                {coins.map(({ id, name, symbol, image, current_price, price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, market_cap_change_24h, market_cap, total_supply, circulating_supply, sparkline_in_7d, total_volume }, index) => (
                    <CoinTableRow
                        ref={index + 1 === coins.length ? lastElement : undefined}
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
                        total_volume={total_volume}
                        price={sparkline_in_7d.price}
                        total_supply={total_supply}
                    />
                ))}
            </StyledCoinTableBody>
        </>
    );
};
