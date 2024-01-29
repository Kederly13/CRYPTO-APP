import { FC } from 'react';

import { StyledCurrency } from './StyledCurrency';

export interface ICurrencyProps {
    disabled?: boolean,
    percent: React.ReactNode;
    onClick?: () => void,
    logo: string,
    name: string,
    symbol: string,
    price: number,
};

export const Currency: FC<ICurrencyProps> = (props) => {
    const { logo, name, symbol, price, percent } = props;

    return (
        <StyledCurrency>
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
