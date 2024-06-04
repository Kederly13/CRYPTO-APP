import styled from 'styled-components';

export const StyledCalculatorWindow = styled.div`
    padding: 48px;
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    width: 886px;
    border-radius: 20px;
`

export const StyledCalculatorHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledCalculatorTitle = styled.h3`
    color: ${({ theme }) => theme.calculatorWindow.primaryFont};
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 37px;
`

export const StyledTopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledCoinContainer = styled.div`
    background-color: ${({ theme }) => theme.calculatorWindow.btnsBackground};
    padding: 8px 24px;

    & > img {
        width: 20px;
        height: 20px;
    }

    & > span {
        color: ${({ theme }) => theme.calculatorWindow.primaryFont};
        font-size: 16px;
        font-weight: 700;
    }
`

export const StyledInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: ${({ theme }) => theme.calculatorWindow.backgroundInput};
    position: relative;
    border: 2px solid transparent;
    border-radius: 4px;
    max-width: 588px;
    width: 70%;
    
    &:focus-within {
        border: 2px solid ${({ theme }) => theme.purchaseCoin.inputBorder};
    }
` 
