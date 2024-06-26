import styled, { keyframes } from "styled-components";

// Keyframes for the shimmer animation
const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const StyledShimmerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    animation: ${shimmer} 2s infinite;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
  }
`;

const BgColor = styled.div`
  background-color: #5d3a9b; 
`;

export const StyledCarouselCoinButtonSkeletonWrapper = styled.li`
  position: relative;
  width: 100%;
  max-width: 249px;
  height: 93px;
  flex-basis: 20%;
  background-color: #4b2c6f; 
  border-radius: 8px;
`;

export const StyledCircle = styled(BgColor)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

interface LineProps {
  width: string;
  height: string;
}

export const StyledLine = styled(BgColor)<LineProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 4px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; 
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; // 
`;

export const CarouselSkeletonWrapper = styled.ul`
  position: absolute;
  display: flex;
  gap: 8px; 
`;

export const ChartCardWrapper = styled(StyledShimmerWrapper)`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled(BgColor)<LineProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-bottom: 24px;
  border-radius: 4px;
`;

export const StyledHeading = styled(BgColor)<LineProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-bottom: 16px; 
  border-radius: 4px;
`;

export const ChartContainer = styled(BgColor)`
  height: 208px; 
  border-radius: 4px;
`;