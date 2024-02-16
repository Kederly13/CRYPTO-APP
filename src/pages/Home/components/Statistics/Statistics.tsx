import { useEffect, useState } from 'react';
import { StyledStatistics } from './StyledStatistics';
import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { ChartBox } from './components/ChartBox';
import { ChartApi } from 'api/ChartApi';
import { fetchCoins } from 'store/slices/coinSlice';
import { ICoin } from 'types/coinType';
import { fetchCoinHistory } from 'store/slices/coinsHistorySlice';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useAllSelectedSearchParams } from 'hooks/useSelectedSearchParams';

import 'swiper/swiper-bundle.css';


export type TCoinPrice = Array<Array<number>>;

export const Statistics = () => {
    const [coinPrices, setCoinPrices] = useState<TCoinPrice>([]);
    const [selectedCoin, setSelectedCoin] = useState<ICoin | undefined>(undefined);
    const [coinVolume, setCoinVolume] = useState<TCoinPrice>([]);
    const dispatch = useAppDispatch();

    const coins = useAppSelector(state => state.coins.coinList);
    const coinsHistory = useAppSelector(state => state.coinsHistory.coinsHistory);

    const coinsHistoryKeys = Object.keys(coinsHistory)

    const { coin } = useAllSelectedSearchParams();
    
    // const coinsHistoryFirst = coinsHistoryKeys.find((key) => coin.selectedValue?.includes(key));
    // const coinsHistorySecond = coinsHistoryKeys.find((key) => coin.selectedValue?.includes(key));

    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;

    const coinFirst = coins.find(({ id }) => coin.selectedValue?.includes(id));
    const coinSecond = coins.find(({ id }) => coin.selectedValue?.includes(id));


    useEffect(() => {
        dispatch(fetchCoins());
    }, [dispatch]);

    useEffect(() => {
        (async () => {
            if (coins.length && coinsHistory.length) {
                return;
            }

            const res = await dispatch(fetchCoins()).unwrap();
            coin.onSelectedMultipleValue(res[0].id);
            dispatch(fetchCoinHistory(res[0].id));
        })()
    }, []);

    useEffect(() => {
        if (coin.selectedValue)
        dispatch(fetchCoinHistory(coin.selectedValue));
    }, [coin.selectedValue]);

    useEffect(() => {
        console.log(fetchedCoinData);
    }, [fetchedCoinData]);
    
    return (
        <StyledStatistics>
            <h2>
                Select the currency to view statistics
                <Button disabled={true} type='button' padding='12px 24px'>Exit comparison</Button>
            </h2>
            <CurrencySwiper
                coinsDetails={fetchedCoins}
            />
            <div className='charts'>
                <ChartBox 
                    headline={selectedCoin ? `${selectedCoin.name} (${selectedCoin.symbol})` : ''} 
                    number={selectedCoin ? selectedCoin.current_price : 0}
                >
                    <LineChart
                        coinData={coinPrices} 
                    />
                </ChartBox>
                <ChartBox 
                    headline={'Volume'} 
                    number={selectedCoin ? selectedCoin.current_price : 0}
                >
                    <BarChart
                        coinData={coinVolume} 
                    />
                </ChartBox>
            </div>
        </StyledStatistics>
    );
};