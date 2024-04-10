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

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { TCoinTableRow } from '../../types';

export const CoinTableRow: FC<TCoinTableRow> = forwardRef(({
    name,
    image,
    symbol,
    number,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    market_cap_change_24h,
    market_cap,
    total_supply,
    circulating_supply,
    price,
    total_volume
}, ref: Ref<HTMLTableRowElement>) => {
    const { width } = useResize();

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
            {width > MEDIA_SIZES.SM && (
                <>
                    <Price1hCol
                        price_change_percentage_1h_in_currency={price_change_percentage_1h_in_currency}
                     />
                    <Price24hCol
                        price_change_percentage_24h_in_currency={price_change_percentage_24h_in_currency}
                    />
                    <Price7dCol
                        price_change_percentage_7d_in_currency={price_change_percentage_7d_in_currency} 
                    />
                </>
            )}
            {width > MEDIA_SIZES.XL && (
                <>
                    <td>
                        <TableProgressBar
                            value={total_volume}
                            max={market_cap}
                        />
                    </td>
                    <td>
                        <TableProgressBar
                            value={circulating_supply}
                            max={total_supply}
                        />
                    </td>
                </>
            )}
            {width > MEDIA_SIZES.MD && (
            <td>
                <Sparkline
                    price={price}
                />
            </td>
            )}
        </StyledCoinTableRow>
    )
});