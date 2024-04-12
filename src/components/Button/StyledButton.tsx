import styled, { css } from 'styled-components';

import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
    color: ${({ theme }) => theme.buttonFontColor};
    display: block;
    border-radius: 6px;
    ${({ $maxWidth }) => $maxWidth && css`
        max-width: ${$maxWidth};
        width: 100%;
    `};
    background-color: ${({ theme }) => theme.buttonColor};
    padding: 12px;
    transition: 0.5s;
    
    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
    }
`;

