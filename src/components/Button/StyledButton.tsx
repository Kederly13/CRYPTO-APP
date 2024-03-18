import styled from 'styled-components';

import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
    color: #FFF;
    display: block;
    border-radius: 6px;
    max-width: ${({ maxWidth }) => maxWidth || '244px'};
    background-color: ${({ disabled }) => disabled ? '#232336' : 'rgba(97, 97, 222, 0.50)'};
    padding: ${({ $padding }) => $padding || '12px 100px'};
    transition: 0.5s;
    
    &:hover {
        background-color: ${({ disabled }) => disabled ?  'rgba(97, 97, 222, 0.50)' : '#232336'};
    }
`;

