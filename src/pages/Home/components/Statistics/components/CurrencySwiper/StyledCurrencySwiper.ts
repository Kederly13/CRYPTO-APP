import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledCurrencySwiperWrapper = styled.div`
    position: relative;

    .swiper-slide {
        height: auto;
        display: flex;
    }
`

export const StyledSwiperSlide = styled(SwiperSlide)`

    &:hover {
        cursor: pointer;
    }
`