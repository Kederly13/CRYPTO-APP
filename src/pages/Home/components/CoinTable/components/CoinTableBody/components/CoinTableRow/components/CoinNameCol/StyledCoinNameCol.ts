import styled from 'styled-components';

export const StyledCoinNameCol = styled.td`
    align-items: center;
    
    .col-wrapper {
        width: max-content;
    }

    @media (max-width: 1200px) {
        .col-wrapper {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
    }
`

export const StyledCoinLogo = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 15px;
`

export const StyledCoinName = styled.span`
    color: ${({ theme }) => theme.trow.font};
    font-size: 16px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
`
