import styled from 'styled-components';

export const StyledTableProgressLabel = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledBar = styled.progress`
    width: 100%;

    /* For Firefox */
    ::-moz-progress-bar {
        background-color: green; /* Default color */
    }

    /* For Chrome, Safari, and Opera */
    ::-webkit-progress-value {
        background-color: green; /* Change this to your desired color */
    }

    /* For Edge */
    ::-ms-fill {
        background-color: green; /* Change this to your desired color */
    }
`;