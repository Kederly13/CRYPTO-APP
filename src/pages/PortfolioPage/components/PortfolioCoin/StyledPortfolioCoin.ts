import styled from 'styled-components';

export const StyledPortfolioCoin = styled.div`

`

export const StyledLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.portfolio.backgroundSecondary};

    & > img {
        margin-bottom: 24px;
    }

    & > span {
        background-color: ${({ theme }) => theme.portfolio.fontPrimary};
        font-size: 28px;
        font-weight: 700;
    }
`