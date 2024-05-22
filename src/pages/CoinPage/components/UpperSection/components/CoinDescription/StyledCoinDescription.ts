import styled from 'styled-components';

export const StyledCoinDescription = styled.div`
    max-width: 700px;
    margin-bottom: 24px;
`
export const StyledDescriptionText = styled.p`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 14px;
`

export const StyledCoinLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;
`

export const StyledCoinLinkBtn = styled.div`
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.coinSummary.background};
    border-radius: 12px;
    max-width: 309px;
`

export const StyledCoinLink = styled.a`
    font-size: 16px;
    font-weight: 500;
    word-wrap: break-word;
`

export const StyledCopyButton = styled.button`
    
`