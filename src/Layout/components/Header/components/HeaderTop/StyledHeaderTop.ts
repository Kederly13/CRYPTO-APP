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
`

export const StyledCoins = styled.div`
    display: flex;
    align-items: center;
`

export const StyledExchange = styled.div`
    display: flex;
    align-items: center;
`

export const StyledMarketCap = styled.div`
    display: flex;
    align-items: center;
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
        }
`