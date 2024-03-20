import { StyledCoinTableBody } from './StyledCoinTableBody';
import { CoinTableRow } from './components/CoinTableRow';
import { selectCoinList } from 'store/slices/coinSlice';

import { useAppSelector } from 'hooks/reduxHooks';

export const CoinTableBody = () => {
    const coins = useAppSelector(selectCoinList);
    console.log(coins)

    return (
        <StyledCoinTableBody>
            {coins.map(({ id, name, symbol, image, current_price, price_change_percentage_1h_in_currency  }, index) => (
                <CoinTableRow
                    key={id}
                    coinNumber={index}
                    coinLogo={image}
                    coinName={name}
                    coinSymbol={symbol}
                    current_price={current_price}
                    price_change_percentage_1h_in_currency={price_change_percentage_1h_in_currency}
                />
            ))}
        </StyledCoinTableBody>
    )
}