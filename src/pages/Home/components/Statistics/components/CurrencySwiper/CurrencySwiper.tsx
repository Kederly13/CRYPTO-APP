import { FC } from 'react';
import { uid } from 'uid';
import { useState } from 'react';
import { Currency } from '../Currency';
import { Percent } from 'components/Percent';
import 'swiper/swiper-bundle.css';
import { SwiperBtns } from '../SwiperBtns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Coin } from '../../Statistics';
import { StyledCurrencySwiperWrapper } from './StyledCurrencySwiper';
import { Swiper as SwiperType } from 'swiper';

interface ICurrencySwiper {
    coinsDetails: Coin[];
};

export const CurrencySwiper: FC<ICurrencySwiper> = ({ coinsDetails }) => {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [swiper, setSwiper] = useState<SwiperType>();
    const perView = 5; 

    return (
        <StyledCurrencySwiperWrapper>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={5}
                onSwiper={setSwiper}
                onActiveIndexChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex + 1)}
            >
                {!!coinsDetails.length && (
                    coinsDetails.map((coin) => (
                        <SwiperSlide key={uid()}>
                            <Currency
                                id={coin.id}         
                                logo={coin.logo}
                                name={coin.name}
                                symbol={coin.symbol}
                                price={coin.price}
                                percent={<Percent percent={coin.hourlyChange} ml='8px' />}              
                            />
                        </SwiperSlide>
                    ))    
                )}
            </Swiper>
            <SwiperBtns 
                onNext={() => swiper?.slideNext()}
                onPrev={() => swiper?.slidePrev()}
                activeIndex={activeIndex} 
                total={coinsDetails.length - perView}
            />
        </StyledCurrencySwiperWrapper>
    );
};