import styled from 'styled-components';

export const StyledChartBox = styled.div`
    background-color: ${({ theme }) => theme.chartBox.background};
    padding: 24px;
    max-width: 632px;
    border-radius: 12px;

    @media (max-width: 1400px) {
        margin: 0 auto;
        max-width: none;
        width: 100%;
    }

    @media (max-width: 1400px) {
        margin: 0 auto;
        max-width: none;
        width: 100%;
    }
`;