import { useEffect, useState } from 'react';
import { StyledStatistics } from './StyledStatistics';
import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { CoinsApi } from 'api/CoinsApi';
import { ChartApi } from 'api/ChartApi';
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

export interface ICoinPrice {
    [index: number]: number;
};

interface ICoinPricesState {
    [index: number]: ICoinPrice;
};

export const Statistics = () => {
    const [coinsDetails, setCoinsDetails] = useState<Coin[]>([]);
    const [coinPrices, setCoinPrices] = useState<ICoinPricesState>([]);
    console.log(coinPrices)

    const loadCoinPrices = async () => {
        // const cashedCoinPrices = localStorage.getItem('coinPrices');

        // if (cashedCoinPrices) {
        //     const parsedCoinPrices = JSON.parse(cashedCoinPrices)
        // }
        try {
            const prices = await ChartApi.getPrices('bitcoin');
            setCoinPrices(prices.data.prices)
            
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
                    symbol: coin.symbol,
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
        loadCoinPrices();
    }, []);
    
    return (
        <StyledStatistics>
            <h2>
                Select the currency to view statistics
                <Button disabled={true} type='button' padding='12px 24px'>Exit comparison</Button>
            </h2>
            <CurrencySwiper
                coinsDetails={coinsDetails}
            />
        </StyledStatistics>
    );
};