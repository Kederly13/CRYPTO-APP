import styled from 'styled-components';

export const StyledPortfolio = styled.div`
    padding: 70px 0 208px;

    @media(max-width: 992px) {
        padding: 30px 0 30px;
    }
`

export const StyledPortfolioHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media(max-width: 992px) {
        margin-bottom: 20px;
    }
`

export const StyledPortfolioTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin-right: 12px;
    color: ${({ theme }) => theme.heading};
`

export const StyledPorfolioBtns = styled.div`
    display: flex;
    width: 650px;
    justify-content: space-between;
`

export const StyledPortfolioCard = styled.div`
    display: flex;
`

export const StyledLogoCard = styled

