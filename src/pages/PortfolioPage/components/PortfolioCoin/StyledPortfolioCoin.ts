import styled from 'styled-components';

export const StyledPortfolioCoin = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`

export const StyledLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    max-width: 258px;
    width: 100%;
    
    & > img {
        margin-bottom: 12px;
        width: 32px;
        height: 32px;
    }

    & > span {
        color: ${({ theme }) => theme.portfolio.fontPrimary};
        font-size: 28px;
        font-weight: 700;
        display: block;
        text-align: center;
    }
`

export const StyledCoinInfo = styled.div`
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    padding: 24px 32px;
`

export const StyledCoinInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(2, auto); 
    grid-gap: 20px; 

    &.top {
        border-bottom: 1px solid ${({ theme }) => theme.portfolio.border};
    }
`;

export const StyledCoinInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
`

export const StyledCoinInfoTitle = styled.h3`
    color: ${({ theme }) => theme.portfolio.fontPrimary};
    font-size: 20px;
    font-weight: 500;

    &.bottom-title {
        padding-top: 37px;
    }
`

export const StyledCoinInfoCol = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledCoinText = styled.span`
    color: ${({ theme }) => theme.portfolio.fontPrimary};
    margin-bottom: 15px;
    font-weight: 500;
`

export const StyledCoinValue = styled.span`
    color: ${({ theme }) => theme.portfolio.fontSecondary};
`

export const StyledBar = styled.progress`
    width: 53px;
`;
