import styled from 'styled-components';

export const StyledCoinTableHead = styled.thead`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.trow.background}; 

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

export const StyledHeadButton = styled.button`
    color: ${({ theme }) => theme.tableHeader.color};
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
`;

