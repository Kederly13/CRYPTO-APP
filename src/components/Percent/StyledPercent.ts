import styled from 'styled-components';

import { PercentProps } from './Percent';

export const StyledPercent = styled.span<PercentProps>`
    margin-left: ${({ marginleft }) => marginleft ? marginleft : '0'};
    margin-right: ${({ marginRight }) => marginRight ? marginRight : 0};
    color: ${({ percent }) => percent > 0 ? 'green' : 'red'};
    display: flex;
    align-items: center;
`