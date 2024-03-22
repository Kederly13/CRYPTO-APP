import styled from "styled-components"

export const StyledCoinTableRow = styled.tr`
    border-radius: 12px;
    background-color: #191926;

    & > td {
        padding: 20px 10px;

        &:first-child {
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px
        }

        &:last-child {
            border-top-right-radius: 12px;
            border-bottom-right-radius: 12px;
        }

        .col-wrapper {
            display: flex;
            align-items: center;

            
        }
    }
   
`