import styled from 'styled-components';

export const StyledCoinHeading = styled.h3`
    font-size: 14px;
    color: ${({ theme }) => theme.convertorDateTime.color};
    margin-bottom: 40px;
`

export const StyledConvertorCoin =  styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.boxLine.color};
    padding-bottom: 24px;
`

export const StyledCoin = styled.div`
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
`

export const StyledCoinSymbol = styled.span`
    margin-right: 4px;
    color: #FFF;
    font-weight: 500;
    font-size: 20px;
`

export const StyledCoinCalculator = styled.div`
    display: flex;
    color: #FFF;
    font-weight: 500;
`