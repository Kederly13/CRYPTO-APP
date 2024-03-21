import { FC } from 'react';
import { StyledCoinNumCol } from './StyledCoinNumCol';

import { ICoinNumProps } from '../../../../types';

export const CoinNumCol: FC<ICoinNumProps> = ({ number }) => (
    <StyledCoinNumCol>
        <span>{number}</span>
    </StyledCoinNumCol>
);