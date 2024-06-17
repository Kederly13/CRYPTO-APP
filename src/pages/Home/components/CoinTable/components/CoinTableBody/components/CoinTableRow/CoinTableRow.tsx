import { FC, forwardRef, Ref } from 'react';

import { StyledCoinTableRow } from './StyledCoinTableRow';
import { CoinNameCol } from './components/CoinNameCol';
import { CoinPriceCol } from './components/CoinPriceСol';
import { CoinNumCol } from './components/CoinNumCol';
import { Price1hCol } from './components/Price1hCol';
import { Price24hCol } from './components/Price24hCol';
import { Price7dCol } from './components/Price7dCol';
import { TableProgressBar } from 'components/TableProgresBar';
import { Sparkline } from './components/SparkLine';

import { ICoin } from 'types/coinType';

interface ICoinInfo {
    coin: ICoin;
    number: number;
};

export const CoinTableRow: FC<ICoinInfo & { ref?: Ref<HTMLTableRowElement> }> = forwardRef(({ coin, number }, ref) => {
    const {
        name,
        image,
        symbol,
        current_price,
        price_change_percentage_1h_in_currency,
        price_change_percentage_24h_in_currency,
        price_change_percentage_7d_in_currency,
        total_volume,
        market_cap,
        circulating_supply,
        total_supply,
        sparkline_in_7d
    } = coin;

    return (
        <StyledCoinTableRow ref={ref}>
            <CoinNumCol
                number={number}
            />
            <CoinNameCol 
                name={name}
                image={image} 
                symbol={symbol} 
            />
            <CoinPriceCol
                current_price={+current_price.toFixed(2)}
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
            <td className='bar'>
                <TableProgressBar
                    value={total_volume}
                    max={market_cap}
                />
            </td>
            <td className='bar'>
                <TableProgressBar
                    value={circulating_supply}
                    max={total_supply}
                />
            </td>
            <td>
                <Sparkline
                    price={sparkline_in_7d?.price}
                />
            </td>
        </StyledCoinTableRow>
    )
});