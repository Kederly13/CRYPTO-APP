import { FC } from 'react';

import { StyledPrice24hCol } from './StyledPrice1hCol';
import { Percent } from 'components/Percent';

import { IPrice24hColProps } from '../../../../types';

export const Price24hCol: FC<IPrice24hColProps> = ({ price_change_percentage_24h_in_currency }) => (
    <StyledPrice24hCol>
        <div className='col-wrapper'>
            <Percent
                $percent={price_change_percentage_24h_in_currency}
            />       
        </div>
    </StyledPrice24hCol>
);
