import styled from 'styled-components';

import { ICoinPageCardProps } from './CoinPageCard';

export const StyledCoinPageCard = styled.div<ICoinPageCardProps>`
    background-color: ${({ theme }) => theme.coinSummary.background};
    padding: 40px 32px;
    max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
    width: 100%;
    border-radius: 12px;

    @media (max-width: 1400px) {
        max-width: 100%;
    }
`