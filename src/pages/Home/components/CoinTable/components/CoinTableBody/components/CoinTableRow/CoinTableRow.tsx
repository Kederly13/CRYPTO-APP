import { FC } from 'react';

import { StyledCoinTableRow } from './StyledCoinTableRow';
import { CoinNameCol } from './components/CoinNameCol';
import { CoinPriceCol } from './components/CoinPriceСol';
import { CoinNumCol } from './components/CoinNumCol';
import { Price1hCol } from './components/Price1hCol';

import { TCoinTableRow } from '../../types';

export const CoinTableRow: FC<TCoinTableRow> = ({ coinName, coinLogo, coinSymbol, coinNumber, current_price, price_change_percentage_1h_in_currency }) => {
    return (
        <StyledCoinTableRow>
            <CoinNumCol
                coinNumber={coinNumber}
            />
            <CoinNameCol 
                coinName={coinName}
                coinLogo={coinLogo} 
                coinSymbol={coinSymbol} 
            />
            <CoinPriceCol
                current_price={current_price}
            />
            <Price1hCol
                price_change_percentage_1h_in_currency={price_change_percentage_1h_in_currency}
            />
        </StyledCoinTableRow>
    )
};