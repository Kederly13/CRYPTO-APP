import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { StyledStatistics } from './StyledStatistics';
import { Button } from 'components/Button';
import { Currency } from './components/Currency';
import { Percent } from 'components/Percent';

import { CoinsApi } from 'api/CoinsApi';

import 'swiper/swiper-bundle.css';
import { SwiperBtns } from './components/SwiperBtns';

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
    }, []);
    
    return (
        <StyledStatistics>
            <h2>
                Select the currency to view statistics
                <Button disabled={true} type='button' padding='12px 24px'>Exit comparison</Button>
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={5}
            >
                {!!coinsDetails.length && (
                    coinsDetails.map((coin) => (
                        <SwiperSlide>
                            <Currency
                                logo={coin.logo}
                                name={coin.name}
                                symbol={coin.symbol}
                                price={coin.price}
                                percent={<Percent percent={coin.hourlyChange} marginLeft='8px' />}              
                            />
                        </SwiperSlide>
                    ))    
                )}
                <SwiperBtns/>
            </Swiper>      
        </StyledStatistics>
    );
};