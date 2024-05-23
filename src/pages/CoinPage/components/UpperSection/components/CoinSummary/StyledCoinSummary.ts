import styled from 'styled-components';

export const StyledCoinTitle = styled.div`
    margin-bottom: 51px;
    display: flex;

    & > div {
        margin-left: 24px;
    }
`

export const StyledCoinName = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 24px;
    font-weight: 700;    
`

export const StyledCoinSummary = styled.div`
   width: 100%;

   @media (max-width: 1400px) {
        /* margin: 0 auto;
        max-width: none;
        width: 100%; */
    }
`

export const StyledHomeLink = styled.a`
    font-size: 16px;
    font-weight: 500;
    display: block;
`

export const StyledPrice = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 36px;
    font-weight: 700;
    display: block;
`

export const StyledTimeBlock = styled.div`
    margin-top: 22px;
`

export const StyledTimeLine = styled.div`
    display: flex;
    margin-bottom: 4px;
    justify-content: space-between;

    & > div {
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
    }
`

export const StyledTimeText = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 20px;
`

export const StyledTimePrice = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 24px;
    font-weight: 500;
`
export const StyledDate = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.secondaryFont};
`