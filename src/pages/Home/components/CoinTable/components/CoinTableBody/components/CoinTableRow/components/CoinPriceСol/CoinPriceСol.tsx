import { FC } from 'react';

import { StyledCoinPriceCol } from './StyledCoinPriceСol';

import { ICoinPriceProps } from '../../../../types';

export const CoinPriceCol: FC<ICoinPriceProps> = ({ current_price }) => (
    <StyledCoinPriceCol>
        <div className='col-wrapper'>
            <span>{current_price}</span>
        </div>
    </StyledCoinPriceCol>
);