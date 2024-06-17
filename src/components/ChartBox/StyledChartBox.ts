import styled from 'styled-components';
import { IChartBoxProps } from './ChartBox';

export const StyledChartBox = styled.div<IChartBoxProps>`
    background-color: ${({ theme }) => theme.chartBox.background};
    padding: 24px;
    max-width: 632px;
    max-width: ${({ $maxWidth }) => $maxWidth};
    max-height: ${({ $maxHeight }) => $maxHeight};;
    border-radius: 12px;
    min-height: 351px;

    @media (max-width: 1400px) {
        margin: 0 auto;
        max-width: none;
        width: 100%;
    }

    @media (max-width: 600px) {
        padding: 12px;
        min-height: 200px;
    }
`;