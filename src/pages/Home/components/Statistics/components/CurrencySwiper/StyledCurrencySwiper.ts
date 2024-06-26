import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const StyledCurrencySwiperWrapper = styled.div`
    position: relative;

    .swiper-slide {
        height: auto;
        display: flex;
    }
`

export const StyledSwiperSlide = styled(SwiperSlide)`
    padding: 0 5px;
    

    &:hover {
        cursor: pointer;
    }
`