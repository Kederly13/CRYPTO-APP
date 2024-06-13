import { FC } from 'react';

import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinListLoading, selectPage } from 'store/slices/coinsSlice/coinsSlice';
import { selectMarketData } from 'store/slices/coinsSlice/coinsSlice';
import { useActions } from 'hooks/useActions';

import { useAppSelector } from 'hooks/reduxHooks';
import { ICoin } from 'types/coinType';
import { useScrollPagination } from 'hooks/useScrollPagination';

interface ICoins {
    coins: ICoin[]
};

export const CoinTableBody: FC<ICoins> = ({ coins }) => {
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
        <tbody>
            {coins.map((coin, index) => (
                <CoinTableRow
                    ref={index + 1 === coins.length ? lastElement : undefined}
                    key={coin.id}
                    number={index}
                    coin={coin}
                />
            ))}
        </tbody>
    );
};
