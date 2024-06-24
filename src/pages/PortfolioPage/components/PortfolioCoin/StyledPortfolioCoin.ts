import styled from 'styled-components';

export const StyledPortfolioCoin = styled.div`
    display: flex;

    @media(max-width: 992px) {
        flex-direction: column;
    }

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

    @media(max-width: 992px) {
        max-width: 100%;
        padding-top: 30px;
    }
`

export const StyledCoinInfo = styled.div`
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};
    padding: 24px 32px;
`

export const StyledCoinInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 

    &.top-grid {
        border-bottom: 1px solid ${({ theme }) => theme.portfolio.border};
        padding-bottom: 37px;
    }

    @media(max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px; // Adjust this value as per your design
    }
`

export const StyledCoinInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;

    &.bottom-header {
        padding-top: 37px;
    }
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
    margin-bottom: 15px;
    font-weight: 500;

    @media(max-width: 992px) {
        margin-bottom: 5px;
    }
    /* text-align: center; */
`

export const StyledCoinValue = styled.span`
    color: ${({ theme }) => theme.portfolio.fontSecondary};
    /* text-align: center; */
`

export const StyledBar = styled.progress`
    width: 53px;
`;
