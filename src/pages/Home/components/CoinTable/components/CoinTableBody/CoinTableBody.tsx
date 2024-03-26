import { StyledCoinTableBody } from './StyledCoinTableBody';
import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinList } from 'store/slices/coinSlice';

import { useAppSelector } from 'hooks/reduxHooks';
import InfiniteScroll from 'react-infinite-scroll-component';

export const CoinTableBody = () => {
    const coins = useAppSelector(selectCoinList);
    console.log(coins)


    return (
            <StyledCoinTableBody>
                {coins.map(({ id, name, symbol, image, current_price, price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, market_cap_change_24h, market_cap, total_supply, circulating_supply, sparkline_in_7d }, index) => (
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
            </StyledCoinTableBody>

    )
}