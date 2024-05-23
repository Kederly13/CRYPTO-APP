import styled from 'styled-components';

export const StyledUpperSection = styled.div`
    margin-top: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryFont};
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: 1400px) {
        flex-direction: column;
    }
`