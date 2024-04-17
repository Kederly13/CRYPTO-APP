import { FC } from 'react';

import { StyledCoinPriceCol } from './StyledCoinPriceСol';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { ICoinPriceProps } from '../../../../types';

export const CoinPriceCol: FC<ICoinPriceProps> = ({ current_price }) => {
    const { objSearchParams } = useSelectedObjSearchParams();
    const { currency } = objSearchParams;
    const { symbol } = currencyData.find(item => item.value === currency) || {};

    return (
        <StyledCoinPriceCol>
            <span>{symbol}</span>
            <span>{current_price}</span> 
        </StyledCoinPriceCol>
    )

};