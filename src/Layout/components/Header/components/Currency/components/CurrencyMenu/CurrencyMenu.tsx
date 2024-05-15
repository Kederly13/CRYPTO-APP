import { FC, useRef } from 'react';

import { currencyData} from './currencyData';
import { SEARCH_PARAMS } from 'constants/searchParams';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { StyledCurrencyMenu, StyledCurrencyButton, StyledCurrencyListItem } from './StyledCurrencyMenu';
import { useActions } from 'hooks/useActions';
import { useOutsideClick } from 'hooks/useOutsideClick';

interface ICurrencyMenu {
    onSetShow: () => void;
}

export const CurrencyMenu: FC<ICurrencyMenu> = ({ onSetShow }) => {
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const ref = useRef<HTMLUListElement>(null)

    const { setNulifyCoins, onSetNulifyCoinsHistory } = useActions();
    
    useOutsideClick(ref, onSetShow);

    return (
        <StyledCurrencyMenu ref={ref}>
           {currencyData.map((item) => (
            <StyledCurrencyListItem
                key={item.value}
                $selected={objSearchParams?.currency === item.value}
            >
                <StyledCurrencyButton onClick={() => {
                    setNulifyCoins()
                    onSetNulifyCoinsHistory()
                    onSetObjSearchParams({
                        ...objSearchParams,
                        [SEARCH_PARAMS.CURRENCY]: item.value
                    })
                }}>
                    {item.value.toUpperCase()}
                </StyledCurrencyButton>
            </StyledCurrencyListItem>
           ))}
        </StyledCurrencyMenu>
    )
};