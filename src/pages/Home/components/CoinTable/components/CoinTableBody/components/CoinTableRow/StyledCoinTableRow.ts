import styled from "styled-components"

export const StyledCoinTableRow = styled.tr`
<<<<<<< HEAD
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
   
=======
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
    
>>>>>>> 0218b8f3cd09df603f64545a26b13bf1009e279b
`