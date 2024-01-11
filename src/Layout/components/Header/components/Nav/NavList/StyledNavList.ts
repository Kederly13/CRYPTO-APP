import styled from 'styled-components';

export const StyledNavList = styled.ul`
    display: flex;

    & > li {
        background-color: blue;
        border: 1px solid white;

        & > a {
            display: inline-flex;
            align-items: center;
        }
    }
`;