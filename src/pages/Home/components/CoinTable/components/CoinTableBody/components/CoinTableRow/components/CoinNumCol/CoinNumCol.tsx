import { FC } from 'react';
import { StyledCoinNumCol } from './StyledCoinNumCol';

import { ICoinNumProps } from '../../../../types';

export const CoinNumCol: FC<ICoinNumProps> = ({ number }) => (
    <StyledCoinNumCol>
        <div className='col-wrapper'>
            <span>{number}</span>
        </div>
    </StyledCoinNumCol>
);