import { CURRENCY_DATA } from './currencyData';
import { StyledCurrencyMenu } from './StyledCurrencyMenu'

export const CurrencyMenu = () => {

    console.log(Object.values(CURRENCY_DATA))
    return (
        <StyledCurrencyMenu>
            {Object.values(CURRENCY_DATA).map((item) => (
                <li>
                    {item}
                </li>
            ))}
        </StyledCurrencyMenu>
    )
}