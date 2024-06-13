import styled from 'styled-components';

export const StyledCoinTableHead = styled.thead`
        /* position: sticky;
        top: 0;
        left: 0; */

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
    color: white;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
`;

