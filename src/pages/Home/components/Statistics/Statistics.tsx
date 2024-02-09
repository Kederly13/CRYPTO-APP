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
    
    const { coin } = useAllSelectedSearchParams();

    const convertDates: (prices: TCoinPrice) => TCoinPrice = (prices) => {
        return prices.map((item) => {
            return [new Date(item[0]).getDate(), item[1]]
        })
    };

    const findSelectedCoin = (id: string | null) => {
        if (id !== null) {
            const foundCoin = fetchedCoins.find(coin => coin.id === id);
            if (foundCoin) {
                setSelectedCoin(foundCoin);
            }
        }
    };

    const loadCoinPrices = async (coin: string) => {
        // const cashedCoinPrices = localStorage.getItem('coinPrices');

        // if (cashedCoinPrices) {
        //     const parsedCoinPrices = JSON.parse(cashedCoinPrices)
        // }
        try {
            const response = await ChartApi.getPrices(coin);
            const newPrices = convertDates(response.data.prices);
            const volume = convertDates(response.data.total_volumes);
            setCoinVolume(volume);
            setCoinPrices(newPrices);
            // const cachedCoinPrices = localStorage.getItem('coinPrices');

            // if (cachedCoinPrices) {
            //     const parsedCoinPrices = JSON.parse(cachedCoinPrices);
            //     setCoinPrices    
            // }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const cashedCoins = localStorage.getItem('coinPrices');
        if (cashedCoins) {
            const parsedCoins = JSON.parse(cashedCoins);
            dispatch(parsedCoins);
            findSelectedCoin(parsedCoins[0].id)
            console.log()
        }
        dispatch(fetchCoins());
    }, [dispatch]);

    useEffect(() => {
        console.log(fetchedCoins)
    }, [fetchedCoins])

    useEffect(() => {
        if (fetchedCoins.length > 0) {
            coin.onSelectedValue(fetchedCoins[0].id);
            findSelectedCoin(coin.selectedValue);
            localStorage.setItem('coinsData', JSON.stringify(fetchedCoins));
        }
    }, [fetchedCoins]);

    useEffect(() => {
        if (coin.selectedValue) {
            loadCoinPrices(coin.selectedValue);
            findSelectedCoin(coin.selectedValue);
        };
    }, [coin.selectedValue]);
    
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