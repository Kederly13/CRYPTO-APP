import styled from 'styled-components';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const StyledPurchaseWindow = styled.div`
    padding: 48px;
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    width: 886px;
    border-radius: 20px;
    // max-width: doesn't work
`
export const StyledInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: ${({ theme }) => theme.purchaseCoin.backgroundInput};
    margin-bottom: 16px;
    position: relative;
    border: 2px solid transparent;
    border-radius: 4px;
    
    &:focus-within {
        border: 2px solid ${({ theme }) => theme.purchaseCoin.inputBorder};
    }
`

export const StyledPurchaseHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledPurchaseTitle = styled.h3`
    color: ${({ theme }) => theme.purchaseCoin.fontPrimary};
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 37px;
`

export const StyledLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.purchaseCoin.backgroundSecondary};
    max-width: 258px;
    width: 100%;
    

    & > img {
        margin-bottom: 12px;
        width: 32px;
        height: 32px;
    }

    & > span {
        color: ${({ theme }) => theme.purchaseCoin.fontPrimary};
        font-size: 28px;
        font-weight: 700;
        display: block;
    }
`

export const StyledPurchaseWrapper = styled.div`
    display: flex;
`

export const StyledPurchaseForm = styled.form`
    max-width: 461px;
    width: 100%;
    margin-left: 32px;

    .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
    }
`

export const StyledPurchaseInput = styled.input`
    width: 100%;
    color: ${({ theme }) => theme.purchaseCoin.fontSecondary};
    font-size: 16px;
`

export const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    color: ${({ theme }) => theme.purchaseCoin.fontSecondary};
    background-color: ${({ theme }) => theme.purchaseCoin.backgroundInput};
    font-size: 16px;
    padding: 8px;


    & > input {
        width: 100%;
    }
`
