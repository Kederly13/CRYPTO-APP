import { useRef, useEffect, useState } from 'react';
import { StyledCoinTableBody } from './StyledCoinTableBody';
import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinList } from 'store/slices/coinSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import InfiniteScroll from 'react-infinite-scroll-component';

export const CoinTableBody = () => {
    const coins = useAppSelector(selectCoinList);
    const [visibleCoins, setVisibleCoins] = useState(coins.slice(0, 10)); 
    const lastElement = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver>();

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

    const loadMoreCoins = () => {
        const nextBatch = coins.slice(visibleCoins.length, visibleCoins.length + 10);
        setVisibleCoins(prevCoins => [...prevCoins, ...nextBatch]);
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
