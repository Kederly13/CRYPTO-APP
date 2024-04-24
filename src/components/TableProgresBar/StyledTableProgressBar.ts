import styled from 'styled-components';

// display: block;
//   width: 100%;
//   overflow: hidden;
//   border-radius: 1px;
//   height: 2px;

//   &::-webkit-progress-value {
//     background-color: ${({ theme, $isCanceled }) => ($isCanceled ? theme.custom.orange : theme.primary.c550)};
//   }

//   &::-webkit-progress-bar {
//     background-color: ${({ theme }) => theme.primary.c50};
//     border-radius: 1px;
//   }

//   &::-moz-progress-bar {
//     background-color: ${({ theme, $isCanceled }) => ($isCanceled ? theme.custom.orange : theme.primary.c550)};
//   }

export const StyledTableProgressLabel = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledBar = styled.progress`
    width: 100%;

`;