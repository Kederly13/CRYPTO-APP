import styled from 'styled-components';

export const StyledPurchaseWindow = styled.div`
    padding: 48px;
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    width: 886px;
    // max-width: doesn't work
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
`

export const StyledPurchaseInput = styled.input`
    width: 100%;
    color: ${({ theme }) => theme.purchaseCoin.fontSecondary};
    background-color: ${({ theme }) => theme.purchaseCoin.backgroundInput};
    font-size: 16px;
    padding: 8px;
    margin-bottom: 16px; // or any value you need
    
    &:last-child {
        margin-bottom: 0;
    }
`
