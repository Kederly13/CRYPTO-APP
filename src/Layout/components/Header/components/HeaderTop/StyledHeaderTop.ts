import styled from 'styled-components';

export const StyledHeaderTop = styled.div`
    background-color: #1F1934;
`

export const StyledHeaderWrapper = styled.div`
    max-width: 669px;
    padding: 16px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    & > div {
        & > svg {
            margin-right: 4px;
        }
    }
`

export const StyledCoins = styled.div`
    display: flex;
    align-items: center;

    & > span {
        margin-left: 8px;
        color: #FFF;
    }
`

export const StyledExchange = styled.div`
    display: flex;
    align-items: center;

    & > span {
        margin-left: 8px;
        color: #FFF;
    }
`

export const StyledMarketCap = styled.div`
    display: flex;
    align-items: center;

    & > span {
        color: #FFF;
    }
`

export const StyledMarketCapPercentage = styled.div`
        display: flex;
        align-items: center;
        max-width: 140px;
        justify-content: space-between;

        & > progress {
            width: 53px;
        }

        & > img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
        }

        & > span {
            margin-right: 8px;
            color: #FFF;
    }
`