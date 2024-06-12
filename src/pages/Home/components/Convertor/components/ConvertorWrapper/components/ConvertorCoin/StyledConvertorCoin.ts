import styled from 'styled-components';


export const StyledCoinHeading = styled.h3`
    font-size: 14px;
    color: ${({ theme }) => theme.convertorDateTime.color};
    margin-bottom: 40px;

    @media(max-width: 1200px) {
        margin-bottom: 20px;
    }
`

export const StyledConvertorCoin =  styled.div`
    /* padding-bottom: 24px; */
`

export const StyledCoin = styled.button`
    display: flex;
    align-items: center;

    & > img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
`
export const StyledCoinName = styled.span`
    margin-right: 3px;
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.coinPrice.color};
`

export const StyledCoinSymbol = styled.span`
    margin-right: 4px;
    color: ${({ theme }) => theme.coinPrice.color};
    font-weight: 500;
    font-size: 20px;
`

export const StyledCoinPrice = styled.span`
    font-size: 14px;
    margin-top: 8px;
    color: ${({ theme }) => theme.coinPrice.color};
    display: block;
`

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.boxLine.color};
    padding-bottom: 24px;
`