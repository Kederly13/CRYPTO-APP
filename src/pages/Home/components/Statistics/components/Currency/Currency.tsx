import { FC } from 'react';

import { StyledCurrency } from './StyledCurrency';

export interface ICurrencyProps {
    disabled?: boolean,
    // children: React.ReactNode;
    onClick?: () => void,
    logo: string,
    name: string,
    symbol: string,
    price: number,
    hourlyChange: number,
    condition?: boolean
};

export const Currency: FC<ICurrencyProps> = (props) => {
    const { logo, name, symbol, price, hourlyChange, condition } = props;

    return (
        <StyledCurrency {...props}>
            <div>
                <img src={logo} alt='logo'/>
                <div>
                    <span>{name} {symbol}</span>
                    <span>{price}</span><span>{hourlyChange}</span> 
                </div>
            </div>
            

        </StyledCurrency>
    );
};