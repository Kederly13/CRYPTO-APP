import { FC } from 'react';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { removeCoin } from 'store/slices/coinsHistory/coinsHistorySlice';

import { StyledCurrency } from './StyledCurrency';
import { useAppDispatch } from 'hooks/reduxHooks';
import { SEARCH_PARAMS } from 'constants/searchParams';

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
    $selected?: boolean;
};

export type CurrencyProps = ICurrencyProps & IStyledCurrencyProps;

export const Currency: FC<CurrencyProps> = ( props ) => {
    const { logo, name, symbol, price, percent, id } = props;
    const dispatch = useAppDispatch();

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const onClick = () => {
        dispatch(removeCoin({ id }));
        onSetObjSearchParams({
            ...objSearchParams,
            [SEARCH_PARAMS.COIN]: id,
        },
        {
            toggle: true,
            minToggle: 1,
            limitMultiple: 2,
            multiple: true,
        })
    }

    return (
        <StyledCurrency 
            {...props} 
            onClick={onClick}
            $selected={objSearchParams?.coin?.includes(id)}
        >
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
