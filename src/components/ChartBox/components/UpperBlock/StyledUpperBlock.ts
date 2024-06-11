import styled from 'styled-components';

export const StyledUpperBlock = styled.div`
    margin-bottom: 24px;

    & p:nth-child(1) {
        color: ${({ theme }) => theme.chartBox.headline};
        font-size: 20px;
        margin-bottom: 24px;
    }

    & p:nth-child(2) {
        color: ${({ theme }) => theme.chartBox.number};
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 16px;
    }

    & p:nth-child(3) {
        color: #B9B9BA;
        font-size: 16px;
    }

    @media (max-width: 600px) {
        & p:nth-child(1) {
            color: ${({ theme }) => theme.chartBox.headline};
            font-size: 12px;
            margin-bottom: 10px;
        }

        & p:nth-child(2) {
            color: ${({ theme }) => theme.chartBox.number};
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        & p:nth-child(3) {
            color: #B9B9BA;
            font-size: 12px;
        }
    }
`;