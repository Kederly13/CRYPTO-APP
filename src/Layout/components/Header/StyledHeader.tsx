import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 0 0 16px;
    background-color: ${({ theme }) => theme.headerBackgroundColor};
    position: sticky;
    top: 0;
    z-index: 5;
`
