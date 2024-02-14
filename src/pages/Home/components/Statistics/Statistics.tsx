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
import { fetchMultipleCoinData } from 'store/slices/coinsHistorySlice';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useAllSelectedSearchParams } from 'hooks/useSelectedSearchParams';

import 'swiper/swiper-bundle.css';


export type TCoinPrice = Array<Array<number>>;

export const Statistics = () => {
    const [coinPrices, setCoinPrices] = useState<TCoinPrice>([]);
    const [selectedCoin, setSelectedCoin] = useState<ICoin | undefined>(undefined);
    const [coinVolume, setCoinVolume] = useState<TCoinPrice>([]);
    const dispatch = useAppDispatch();

    const fetchedCoins = useAppSelector(state => state.coins.coinList);
    const fetchedCoinData = useAppSelector(state => state.coinsHistory.coinsHistory);

    const { coin } = useAllSelectedSearchParams();

    const findSelectedCoin = (id: string | null) => {
        if (id !== null) {
            const foundCoin = fetchedCoins.find(coin => coin.id === id);
            if (foundCoin) {
                setSelectedCoin(foundCoin);
            }
        }
    };

    useEffect(() => {
        dispatch(fetchCoins());
    }, [dispatch]);

    useEffect(() => {
        // if (fetchedCoins.length > 0) {
        //     coin.onSelectedValue(fetchedCoins[0].id);
        //     findSelectedCoin(coin.selectedValue);
        //     localStorage.setItem('coinsData', JSON.stringify(fetchedCoins));
        // }
    }, [fetchedCoins]);

    useEffect(() => {
        if (coin.selectedValue)
        dispatch(fetchMultipleCoinData(coin.selectedValue));
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