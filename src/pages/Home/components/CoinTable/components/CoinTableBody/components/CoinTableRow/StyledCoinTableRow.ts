import styled from "styled-components"

export const StyledCoinTableRow = styled.tr`
    border-collapse: separate;

    & > td {
        padding: 20px 10px;
        border-collapse: separate;
        
        /* & > div {
            display: flex;
            align-items: center;
        } */

        &:first-child {
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
        }

        &:last-child {
            border
        }
    }

    border-radius: 12px;
    background-color: #191926;
    
`