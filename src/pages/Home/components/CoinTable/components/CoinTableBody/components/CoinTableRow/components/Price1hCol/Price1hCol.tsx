import { FC } from 'react';

import { StyledPrice1hCol } from './StyledPrice1hCol';
import { Percent } from 'components/Percent';

import { IPrice1hColProps } from '../../../../types';

export const Price1hCol: FC<IPrice1hColProps> = ({ price_change_percentage_1h_in_currency }) => (
    <StyledPrice1hCol>
        <div className=' col-wrapper'>
            <Percent
                $percent={price_change_percentage_1h_in_currency}
            />
        </div>
        
    </StyledPrice1hCol>
);
