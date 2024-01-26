import { useSwiper } from "swiper/react"
import { FC } from "react";

import { StyledSwiperBtns } from './StyledSwiperBtns';
import { NextArrow } from 'assets/svg/nextArrow';
import { PrewArrow } from 'assets/svg/PrevArrow';

interface ISwiperBtnsProps {
  total: number,
  activeIndex: number;
};

export const SwiperBtns: FC<ISwiperBtnsProps> = ({ total, activeIndex }) => {
  const swiper = useSwiper();

  return (
    <StyledSwiperBtns>
      {activeIndex > 1 && (
        <button aria-label='prev-slide' onClick={() => swiper.slidePrev()}><PrewArrow/></button>
      )}
      {activeIndex !== total && (
        <button onClick={() => swiper.slideNext()}><NextArrow/></button>
      )}
    </StyledSwiperBtns>
  );
};