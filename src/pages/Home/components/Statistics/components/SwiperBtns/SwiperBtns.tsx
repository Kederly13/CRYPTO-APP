import { useSwiper } from "swiper/react"

import { StyledSwiperBtns } from './StyledSwiperBtns';
import { NextArrow } from 'assets/svg/nextArrow';
import { PrewArrow } from 'assets/svg/PrevArrow';

export const SwiperBtns = () => {
  const swiper = useSwiper();

  return (
    <StyledSwiperBtns>
      <button onClick={() => swiper.slidePrev()}><PrewArrow/></button>
      <button onClick={() => swiper.slideNext()}><NextArrow/></button>
    </StyledSwiperBtns>
  );
};