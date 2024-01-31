import { useEffect, useState } from 'react';
import { StyledStatistics } from './StyledStatistics';
import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { Chart } from './components/Chart/Chart';
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
    const [selectedCoin, setSelectedCoin] = useState<Coin>();

    const { coin } = useAllSelectedSearchParams();

    const convertDates: (prices: TCoinPrice) => TCoinPrice = (prices) => {
        return prices.map((item) => {
            return [new Date(item[0]).getDate(), item[1]]
        })
    };

    const findSelectedCoin = (id: string) => {
        const foundCoin = coinsDetails.find(coin => coin.id === id);
        setSelectedCoin(foundCoin)
    };

    const loadCoinPrices = async (coin: string) => {
        // const cashedCoinPrices = localStorage.getItem('coinPrices');

        // if (cashedCoinPrices) {
        //     const parsedCoinPrices = JSON.parse(cashedCoinPrices)
        // }
        try {
            const prices = await ChartApi.getPrices(coin);
            const newPrices = convertDates(prices.data.prices);
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
                  console.log(newCoins);
                  setCoinsDetails(newCoins);
                  localStorage.setItem('coinsInfo', JSON.stringify(newCoins));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadCoinsInfo();
        console.log(coinsDetails);
        if (!!coinsDetails.length) {
            findSelectedCoin(coinsDetails[0].id)
        }
    }, []);

    useEffect(() => {
        if (coin.selectedValue) {
            loadCoinPrices(coin.selectedValue);
            findSelectedCoin(coin.selectedValue)
        } else {
            loadCoinPrices(coinsDetails[0].id)
        }
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
            <Chart coinData={coinPrices} headline={selectedCoin ? `${selectedCoin.name} (${selectedCoin.symbol})` : ''} number={selectedCoin ? selectedCoin.price : 0}/>
        </StyledStatistics>
    );
};