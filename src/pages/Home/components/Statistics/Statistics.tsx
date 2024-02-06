import { useEffect, useState } from 'react';
import { StyledStatistics } from './StyledStatistics';
import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { ChartBox } from './components/ChartBox';
import { CoinsApi } from 'api/CoinsApi';
import { ChartApi } from 'api/ChartApi';


import { useAllSelectedSearchParams } from 'hooks/useSelectedSearchParams';

import 'swiper/swiper-bundle.css';

export interface Coin {
    id: string;
    logo: string,
    name: string,
    symbol: string,
    price: number,
    hourlyChange: number,
    condition?: boolean
};

export type TCoinPrice = Array<Array<number>>;

export const Statistics = () => {
    const [coinsDetails, setCoinsDetails] = useState<Coin[]>([]);
    const [coinPrices, setCoinPrices] = useState<TCoinPrice>([]);
    const [selectedCoin, setSelectedCoin] = useState<Coin | undefined>(undefined);
    const [coinVolume, setCoinVolume] = useState<TCoinPrice>([]);

    const { coin } = useAllSelectedSearchParams();

    const convertDates: (prices: TCoinPrice) => TCoinPrice = (prices) => {
        return prices.map((item) => {
            return [new Date(item[0]).getDate(), item[1]]
        })
    };

    const findSelectedCoin = (id: string | null) => {
        if (id !== null) {
            const foundCoin = coinsDetails.find(coin => coin.id === id);
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
            console.log(response)
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

    const loadCoinsInfo = async () => {
        try {
            const cachedCoinsInfo = localStorage.getItem('coinsInfo');

            if (cachedCoinsInfo) {
                const parsedCoinsInfo = JSON.parse(cachedCoinsInfo);
                setCoinsDetails(parsedCoinsInfo);
                coin.onSelectedValue(parsedCoinsInfo[0].id);
            } else {
                const coinsInfo = await CoinsApi.getCoins();
                const newCoins = coinsInfo.data.map((coin: any) => ({
                    id: coin.id,
                    logo: coin.image,
                    name: coin.name,
                    symbol: coin.symbol.toUpperCase(),
                    price: coin.current_price,
                    hourlyChange: coin.market_cap_change_percentage_24h,
                  }));
                  setCoinsDetails(newCoins);
                  localStorage.setItem('coinsInfo', JSON.stringify(newCoins));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadCoinsInfo();
    }, []);

    useEffect(() => {
        if (coinsDetails.length) {
            coin.onSelectedValue(coinsDetails[0].id);
            findSelectedCoin(coin.selectedValue);
        }
        
    }, [coinsDetails])

    useEffect(() => {
        if (coin.selectedValue) {
            loadCoinPrices(coin.selectedValue);
            findSelectedCoin(coin.selectedValue);
            console.log()
        };
    }, [coin.selectedValue]);
    
    return (
        <StyledStatistics>
            <h2>
                Select the currency to view statistics
                <Button disabled={true} type='button' padding='12px 24px'>Exit comparison</Button>
            </h2>
            <CurrencySwiper
                coinsDetails={coinsDetails}
            />
            <div className='charts'>
                <ChartBox 
                    headline={selectedCoin ? `${selectedCoin.name} (${selectedCoin.symbol})` : ''} 
                    number={selectedCoin ? selectedCoin.price : 0}
                >
                    <LineChart
                        coinData={coinPrices} 
                    />
                </ChartBox>
                <ChartBox 
                    headline={'Volume'} 
                    number={selectedCoin ? selectedCoin.price : 0}
                >
                    <BarChart
                        coinData={coinVolume} 
                    />
                </ChartBox>
            </div>
        </StyledStatistics>
    );
};