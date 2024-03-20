import { FC } from 'react';
import { StyledCoinNumCol } from './StyledCoinNumCol';

import { ICoinNumProps } from '../../../../types';

export const CoinNumCol: FC<ICoinNumProps> = ({ coinNumber }) => (
    <StyledCoinNumCol>
        <span>{coinNumber}</span>
    </StyledCoinNumCol>
);