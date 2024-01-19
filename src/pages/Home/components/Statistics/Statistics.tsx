import { FC, useEffect, useState } from 'react';

import { StyledStatistics } from './StyledStatistics';
import { Button } from 'components/Button';
import { Currency } from './components/Currency';

import { CoinsApi } from 'api/CoinsApi';

interface Coin {
    id: string;
    logo: string,
    name: string,
    symbol: string,
    price: number,
    hourlyChange: number,
    condition?: boolean
}

export const Statistics = () => {
    const [coinsDetails, setCoinsDetails] = useState<Coin[]>([]);

    const loadCoinsInfo = async () => {
        try {
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
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadCoinsInfo();
        
    }, []);
    

    return (
        <StyledStatistics>
        <h2>
            Select the currency to view statistics
            <Button disabled={true} type='button' padding='12px 24px'>Exit comparison</Button>
        </h2>
        <div>
            {!!coinsDetails.length && (
                coinsDetails.map((coin) => (
                    <Currency
                    logo={coin.logo}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.price}
                    hourlyChange={coin.hourlyChange}
                />
                ))
                
            )}
        </div>
    </StyledStatistics>
    );
};