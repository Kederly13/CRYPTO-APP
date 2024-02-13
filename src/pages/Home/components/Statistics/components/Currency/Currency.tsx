import { FC } from 'react';

import { useAllSelectedSearchParams } from 'hooks/useSelectedSearchParams';
import { fetchMultipleCoinData } from 'store/slices/coinsHistorySlice';

import { StyledCurrency } from './StyledCurrency';

export interface ICurrencyProps {
    disabled?: boolean,
    percent: React.ReactNode;
    onClick?: () => void,
    logo: string,
    name: string,
    symbol: string,
    price: number,
    id: string
};

export interface IStyledCurrencyProps {
    selected?: boolean;
};

export type CurrencyProps = ICurrencyProps & IStyledCurrencyProps;

export const Currency: FC<CurrencyProps> = ( props ) => {
    const { logo, name, symbol, price, percent, id } = props;
    const { coin } = useAllSelectedSearchParams();
    
    return (
        <StyledCurrency {...props} onClick={() => coin.onSelectedMultipleValue(id)} selected={coin.selectedValue?.includes(id)}>
                <img className='currencyLogo' src={logo} alt='logo'/>
                <div>
                    <p>{name} ({symbol})</p>
                    <div>
                        <span>{price}</span>{percent}
                    </div>
                </div>
        </StyledCurrency>
    );
};
