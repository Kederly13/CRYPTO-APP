import styled from 'styled-components';

export const StyledCoinTableHead = styled.thead`
    & > tr {
        & > th {
            padding: 20px 10px;
            text-align: left;
        }
       
    }
`

export const StyledCoinTableHeaderRow = styled.tr`
    padding: 20px;
    
    & > th {
        color: ${({ theme }) => theme.theader.font};
    }
`

export const StyledHeadNum = styled.th`
    /* width: 20px; */
`

export const StyledHeadName = styled.th`

    /* width: 208px; */
`

export const StyledHeadPrice = styled.th`
    /* width: 80px; */
`

export const StyledHead1h = styled.th`
    /* width: 72px; */
`

export const StyledHead24h = styled.th`
    /* width: 72px; */
`

export const StyledHead7d = styled.th`
    /* width: 72px; */
`

export const StyledHeadMCap = styled.th`
    /* width: 228px; */
`

export const StyledHeadSupply = styled.th`
    /* width: 228px; */
`

export const StyledHeadChart = styled.th`
    /* width: 120px; */
`