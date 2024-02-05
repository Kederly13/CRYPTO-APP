import { FC } from "react";

import { StyledSwiperBtns } from './StyledSwiperBtns';
import { NextArrow } from 'assets/svg/nextArrow';
import { PrewArrow } from 'assets/svg/PrevArrow';

interface ISwiperBtnsProps {
  total: number,
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
};

export const SwiperBtns: FC<ISwiperBtnsProps> = ({ total, activeIndex, onNext, onPrev }) => (
  <StyledSwiperBtns>
    {activeIndex > 0 && (
      <button aria-label='prev-slide' onClick={onPrev}><PrewArrow/></button>
    )}
    {activeIndex !== total && (
      <button aria-label='next-slide' onClick={onNext}><NextArrow/></button>
    )}
  </StyledSwiperBtns>
);