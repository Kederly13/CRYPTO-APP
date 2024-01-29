import styled from "styled-components";

export const StyledSwiperBtns = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 50;
  pointer-events: none;

  button {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(97, 97, 222, 0.50);
    pointer-events: auto;
  }

  & > button:nth-child(1) { 
    transform: translate(-50%)
  }

  & > button:last-child {
    transform: translate(50%);
    margin-left: auto;
  }
`;
