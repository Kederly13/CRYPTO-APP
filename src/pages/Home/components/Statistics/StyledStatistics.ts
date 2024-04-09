import styled from 'styled-components';

export const StyledStatisticsHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const StyledStatistics = styled.div`
    & > h2 {
        font-size: 14px;
        color: #D1D1D1;
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
    }
`;

export const StyledCharts = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 42px;

    @media(max-width: 1400px) {
        flex-wrap: wrap;

        & > :first-child {
            margin-bottom: 15px;
        }
    }
`