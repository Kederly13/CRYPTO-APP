import { FC } from 'react';
import { useState } from 'react';
import { Currency } from './components/Currency';
import { Percent } from 'components/Percent';
import 'swiper/swiper-bundle.css';
import { SwiperBtns } from './components/SwiperBtns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Coin } from '../../Statistics';
import { StyledCurrencySwiper } from './StyledCurrencySwiper';
import { Swiper as SwiperType } from 'swiper';

interface ICurrencySwiper {
    coinsDetails: Coin[];
};

export const CurrencySwiper: FC<ICurrencySwiper> = ({ coinsDetails }) => {
    const [slider, setSlider] = useState<SwiperType>();
    // const [activeIndex, setActiveIndex] = useState<number>(1);
    
    return (
        <StyledCurrencySwiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={5}
            onSwiper={setSlider}
            // onActiveIndexChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
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
    </StyledCurrencySwiper>
    );
};