import styled from 'styled-components';

import { ReactComponent as SunIcon } from 'assets/svg/sun.svg';

export const StyledThemeBtn = styled.button`
    color: inherit;
    background-color: ${({ theme }) => theme.formBackgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px;
    border-radius: 12px;
    transition: 0.5s ease;
    border: 1px solid ${({ theme }) => theme.formBorderColor};

    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
        border: 1px solid ${({ theme }) => theme.buttonActiveBorderColor};
    }
`

export const StyledSun = styled(SunIcon)`
  .sun-path {
    stroke: ${({ theme }) => theme.primaryColor}; 
  }
`;