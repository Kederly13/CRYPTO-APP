import styled from "styled-components";

export const StyledSwiperBtns = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 100;
  top: 50%;

  & > button:nth-child(1),
  & > button:nth-child(2) {
    padding: 15px;
    border-radius: 50%;
    background-color: rgba(97, 97, 222, 0.50);
    top: 50%;
    transform: translateY(-50%);
  }

  & > button:nth-child(1) {
    right: 0;
  }

  & > button:nth-child(2) {
    left: 0;
  }
`;
