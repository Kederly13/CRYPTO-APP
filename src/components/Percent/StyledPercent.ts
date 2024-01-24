import styled from 'styled-components';

import { PercentProps } from './Percent';

export const StyledPercent = styled.span<PercentProps>`
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : 0};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : 0};
    color: ${({ percent }) => percent ? 'green' : 'red'};

    & > svg {
        margin-right: 4px;
    }

`