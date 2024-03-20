import { FC } from 'react';

import { StyledCoinPriceCol } from './StyledPrice1hCol';
import { Percent } from 'components/Percent';

import { IPrice1hCol } from '../../../../types';

export const Price1hCol: FC<IPrice1hCol> = ({ price_change_percentage_1h_in_currency }) => (
    <StyledCoinPriceCol>
        <Percent
            $percent={price_change_percentage_1h_in_currency}
        />
    </StyledCoinPriceCol>
);
