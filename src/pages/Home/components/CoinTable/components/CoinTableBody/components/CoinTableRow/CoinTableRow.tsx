import { FC } from 'react';

import { StyledCoinTableRow } from './StyledCoinTableRow';
import { CoinNameCol } from './components/CoinNameCol';
import { CoinPriceCol } from './components/CoinPriceСol';
import { CoinNumCol } from './components/CoinNumCol';
import { Price1hCol } from './components/Price1hCol';
import { Price24hCol } from './components/Price24hCol';
import { Price7dCol } from './components/Price7dCol';
import { TableProgressBar } from 'components/TableProgresBar';

import { TCoinTableRow } from '../../types';
import { Sparkline } from './components/SparkLine';

export const CoinTableRow: FC<TCoinTableRow> = ({ name, image, symbol, number, current_price, price_change_percentage_1h_in_currency, price_change_percentage_24h_in_currency, price_change_percentage_7d_in_currency, 
    market_cap_change_24h, market_cap, total_supply, circulating_supply, sparkline_in_7d
     }) => {
    return (
        <StyledCoinTableRow>
            <CoinNumCol
                number={number}
            />
            <CoinNameCol 
                name={name}
                image={image} 
                symbol={symbol} 
            />
            <CoinPriceCol
                current_price={current_price}
            />
            <Price1hCol
                price_change_percentage_1h_in_currency={price_change_percentage_1h_in_currency}
            />
            <Price24hCol
                price_change_percentage_24h_in_currency={price_change_percentage_24h_in_currency}
            />
            <Price7dCol
                price_change_percentage_7d_in_currency={price_change_percentage_7d_in_currency} 
            />
            <td>
                <TableProgressBar
                    value={market_cap_change_24h}
                    max={market_cap}
                />
            </td>
            <td>
                <TableProgressBar
                    value={circulating_supply}
                    max={total_supply}
                />
            </td>
            <td>
                <Sparkline
                    sparkline_in_7d={sparkline_in_7d}
                />
            </td>

        </StyledCoinTableRow>
        
    )
};