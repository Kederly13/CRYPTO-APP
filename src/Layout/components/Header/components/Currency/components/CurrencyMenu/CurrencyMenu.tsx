import { currencyData} from './currencyData';
import { SEARCH_PARAMS } from 'constants/searchParams';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { StyledCurrencyMenu, StyledCurrencyButton, StyledCurrencyListItem } from './StyledCurrencyMenu';

export const CurrencyMenu = () => {
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    return (
        <StyledCurrencyMenu>
           {currencyData.map((item) => (
            <StyledCurrencyListItem
                key={item.value}
                $selected={objSearchParams?.currency === item.value}
            >
                <StyledCurrencyButton onClick={() => {
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