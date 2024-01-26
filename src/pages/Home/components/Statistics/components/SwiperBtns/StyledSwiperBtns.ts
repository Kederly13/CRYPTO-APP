import styled from "styled-components";

export const StyledSwiperBtns = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 100;
  top: 15%;

  /* transform: translate(-5) */

  & > button:nth-child(1),
  & > button:nth-child(2) {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(97, 97, 222, 0.50);
  }

  & > button:nth-child(1) { 
    transform: translate(-50%)
  }

  & > button:nth-child(2) {
    transform: translate(50%)
  }
`;
