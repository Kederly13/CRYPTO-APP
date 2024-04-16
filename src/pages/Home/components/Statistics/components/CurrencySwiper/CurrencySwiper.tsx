import { FC } from 'react';
import { uid } from 'uid';
import { useState } from 'react';
import { SwiperCoins } from '../SwiperCoins';
import { Percent } from 'components/Percent';
import { SwiperBtns } from '../SwiperBtns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useResize } from 'hooks/useResize';

import { StyledCurrencySwiperWrapper } from './StyledCurrencySwiper';
import { Swiper as SwiperType } from 'swiper';
import { ICoin } from 'types/coinType';
import { MEDIA_SIZES } from 'constants/mediaSizes';

interface ICurrencySwiper {
    coinsDetails: ICoin[];
    selected?: boolean
};

export const CurrencySwiper: FC<ICurrencySwiper> = ({ coinsDetails }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();

    const { width } = useResize();

    const perView = 5;

    return (
        <StyledCurrencySwiperWrapper>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={5}
                onSwiper={setSwiper}
                onActiveIndexChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },

                    640: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    }
                }}
            >
                {!!coinsDetails.length && (
                    coinsDetails.map((coin) => (
                        <SwiperSlide key={uid()}>
                            <SwiperCoins
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
            {width > MEDIA_SIZES.XXL && (
                <SwiperBtns 
                    onNext={() => swiper?.slideNext()}
                    onPrev={() => swiper?.slidePrev()}
                    activeIndex={activeIndex} 
                    total={coinsDetails.length - perView}
                />
            )}
        </StyledCurrencySwiperWrapper>
    );
};