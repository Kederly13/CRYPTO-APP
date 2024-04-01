import { FC } from 'react';
import { uid } from 'uid';
import { useState } from 'react';
import { Currency } from '../Currency';
import { Percent } from 'components/Percent';
import { SwiperBtns } from '../SwiperBtns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { StyledCurrencySwiperWrapper } from './StyledCurrencySwiper';
import { Swiper as SwiperType } from 'swiper';
import { ICoin } from 'types/coinType';

interface ICurrencySwiper {
    coinsDetails: ICoin[];
    selected?: boolean
};

export const CurrencySwiper: FC<ICurrencySwiper> = ({ coinsDetails }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();
    const perView = 5;

    return (
        <StyledCurrencySwiperWrapper>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={5}
                onSwiper={setSwiper}
                onActiveIndexChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
            >
                {!!coinsDetails.length && (
                    coinsDetails.map((coin) => (
                        <SwiperSlide key={uid()}>
                            <Currency
                                id={coin.id}         
                                $logo={coin.image}
                                name={coin.name}
                                $symbol={coin.symbol}
                                $price={Math.floor(coin.current_price * 100) / 100}
                                $percent={<Percent $percent={coin.market_cap_change_percentage_24h} $ml='8px' />}              
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