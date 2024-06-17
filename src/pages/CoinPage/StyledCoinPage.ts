import styled from 'styled-components';

export const StyledCoinPage = styled.div`
    padding: 44px 0 170px;


`

export const StyledCoinPageTitle = styled.h3`
    color: ${({ theme }) => theme.heading};
    font-size: 20px;
    font-weight: 500;
    text-align: center;

    @media(max-width: 1400px) {
        margin-bottom: 15px;
    }
`
