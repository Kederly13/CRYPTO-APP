import { FC } from 'react';

import { StyledPrice7dCol } from './StyledPrice7dCol';
import { Percent } from 'components/Percent';

import { IPrice7dCol } from '../../../../types';

export const Price7dCol: FC<IPrice7dCol> = ({ price_change_percentage_7d_in_currency }) => (
    <StyledPrice7dCol>
        <Percent
            $percent={price_change_percentage_7d_in_currency}
        />
    </StyledPrice7dCol>
);
