import styled from 'styled-components';

import { ICoinPageCardProps } from './CoinPageCard';

export const StyledCoinPageCard = styled.div<ICoinPageCardProps>`
    background-color: ${({ theme }) => theme.coinSummary.background};
    padding: 40px 32px;
    max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
`