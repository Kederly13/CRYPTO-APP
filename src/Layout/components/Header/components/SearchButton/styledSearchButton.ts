import styled from 'styled-components';

export const StyledSearchButton = styled.button`
    background-color: #191926;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    padding: 0 8px;
    cursor: pointer;
    display: none;

    &:hover {
        background-color: rgba(25, 25, 38, 0.8);
    }

    @media (max-width: 992px) {
        display: block;
        margin: 0 auto;
    }
`;