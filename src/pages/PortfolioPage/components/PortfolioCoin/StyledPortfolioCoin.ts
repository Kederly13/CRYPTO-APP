import styled from 'styled-components';

export const StyledPortfolioCoin = styled.div`
    display: flex;
`

export const StyledLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    max-width: 258px;
    width: 100%;
    height: 292px;

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
    }
`

export const StyledCoinInfo = styled.div`
    background-color: ${({ theme }) => theme.portfolio.backgroundPrimary};
    padding: 24px 0;
`

export const StyledCoinInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four columns */
    grid-template-rows: repeat(2, auto); /* Two rows */
    grid-gap: 20px; /* Gap between grid items */
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
`

export const StyledCoinInfoCol = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledCoinText = styled.span`
    color: ${({ theme }) => theme.portfolio.fontPrimary};
`


export const StyledCoinValue = styled.span`

`
