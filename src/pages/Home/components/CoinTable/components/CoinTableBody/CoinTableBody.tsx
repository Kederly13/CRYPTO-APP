import { useAppDispatch } from 'hooks/reduxHooks';
import { StyledCoinTableBody } from './StyledCoinTableBody';
import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinList, selectCoinListLoading, selectPage } from 'store/slices/coinsSlice/coinsSlice';
import { selectMarketData } from 'store/slices/coinsSlice/coinsSlice';
import { useActions } from 'hooks/useActions';

import { useAppSelector } from 'hooks/reduxHooks';
import { useScrollPagination } from 'hooks/useScrollPagination';

export const CoinTableBody = () => {

    const coins = useAppSelector(selectCoinList);
    const loading = useAppSelector(selectCoinListLoading);
    const marketData = useAppSelector(selectMarketData);
    const page = useAppSelector(selectPage);

    const coinsTotal = marketData?.active_cryptocurrencies;

    const { onSetPage, fetchCoins } = useActions();

    const loadMoreCoins = () => {
       onSetPage(page + 1)

       const controller = new AbortController();

       fetchCoins(controller);
    };
    
    const lastElement = useScrollPagination(
        loadMoreCoins,
        loading,
        !!coinsTotal && coins.length !== coinsTotal 
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
