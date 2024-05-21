import styled from 'styled-components';

export const StyledCoinDescription = styled.div`
    max-width: 700px;
    margin-bottom: 24px;
`
export const StyledDescriptionText = styled.p`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 14px;
`

export const CoinLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CoinLinkBtn = styled.div`
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.coinSummary.background};
    border-radius: 12px;
    max-width: 309px;
`

export const CoinLink = styled.a`
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
`