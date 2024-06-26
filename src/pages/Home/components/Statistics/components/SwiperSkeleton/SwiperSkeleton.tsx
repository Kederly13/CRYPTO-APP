import React from "react";
import {
  StyledCarouselCoinButtonSkeletonWrapper,
  StyledShimmerWrapper,
  StyledCircle,
  StyledLine,
  FlexContainer,
  FlexColumn,
  CarouselSkeletonWrapper,
  ChartCardWrapper,
  StyledParagraph,
  StyledHeading,
  ChartContainer,
} from "./StyledSwiperSkeleton";


export const CarouselCoinButtonSkeleton: React.FC = () => {
    return (
      <StyledCarouselCoinButtonSkeletonWrapper>
        <StyledShimmerWrapper>
          <FlexContainer>
            <StyledCircle />
            <FlexColumn>
              <StyledLine width="160px" height="16px" />
              <StyledLine width="164px" height="18px" />
            </FlexColumn>
          </FlexContainer>
        </StyledShimmerWrapper>
      </StyledCarouselCoinButtonSkeletonWrapper>
    );
  };
  
  export const CoinCarouselSkeleton: React.FC = () => {
    return (
      <CarouselSkeletonWrapper>
        <CarouselCoinButtonSkeleton />
        <CarouselCoinButtonSkeleton />
        <CarouselCoinButtonSkeleton />
        <CarouselCoinButtonSkeleton />
        <CarouselCoinButtonSkeleton />
      </CarouselSkeletonWrapper>
    );
  };

  export const CoinsChartCardSkeleton: React.FC = () => {
    return (
      <ChartCardWrapper>
        <div>
          <StyledParagraph width="160px" height="24px" />
          <StyledHeading width="160px" height="28px" />
          <StyledParagraph width="160px" height="24px" />
        </div>
        <ChartContainer />
      </ChartCardWrapper>
    );
  };