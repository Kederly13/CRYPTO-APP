import { FC } from 'react';

import { useAllSelectedSearchParams } from 'hooks/useSelectedSearchParams';

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

export const Currency: FC<ICurrencyProps> = (props) => {
    const { logo, name, symbol, price, percent, id } = props;
    const { coin } = useAllSelectedSearchParams();

    return (
        <StyledCurrency onClick={() => coin.onSelectedValue(id)}>
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
