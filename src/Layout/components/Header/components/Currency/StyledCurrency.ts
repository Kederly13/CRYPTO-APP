import styled from 'styled-components';

import { ReactComponent as Dollar } from 'assets/svg/dollar.svg';

export const StyledCurrencyWrapper = styled.div`
    position: relative;
    margin: 0 16px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.formBackgroundColor};
    width: 100px;

    @media(max-width: 576px) {
        margin: 0;
        width: auto;
    }
`

export const StyledCurrency = styled.button`
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 4px 10px;
    height: 100%;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.formBorderColor};
    transition: 0.5s ease;
    position: relative;

    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
        border: 1px solid ${({ theme }) => theme.buttonActiveBorderColor};
    }
    
    
    & > svg:first-child {
        margin-right: 8px;
    }

    & > span {
        margin-right: 8px;
    }
`

export const StyledDollar = styled(Dollar)`
    width: 20px;
    height: 20px;
    
    circle {
        fill: ${({ theme }) => theme.dollarIcon.defaultFill};
    }
    .dollar-sign {
        fill: ${({ theme }) => theme.dollarIcon.signFill}; // or any other color you want for the dollar sign
    }
`;