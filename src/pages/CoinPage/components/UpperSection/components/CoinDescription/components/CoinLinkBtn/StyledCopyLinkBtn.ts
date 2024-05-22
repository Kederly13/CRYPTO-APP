import styled from 'styled-components';

export const StyledCoinLinkBtn = styled.div`
    padding: 16px 24px;
    background-color: ${({ theme }) => theme.coinSummary.background};
    border-radius: 12px;
    max-width: 309px;
    display: flex;
    justify-content: center;
     

    & > button {
        margin-left: 16px;
    }
`

export const StyledCoinLink = styled.a`
    font-size: 16px;
    font-weight: 500;
    word-break: break-all;
`