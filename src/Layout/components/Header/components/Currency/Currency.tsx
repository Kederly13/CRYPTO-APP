import { useState } from 'react';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';
import { Dollar } from 'assets/svg/dollar';
import { CurrencyMenu } from './components/CurrencyMenu';
import { StyledCurrency, StyledCurrencyWrapper } from './StyledCurrency';

export const Currency = () => {
    const { objSearchParams } = useSelectedObjSearchParams();
    const [isActiveMenu, setActiveMenu] = useState(false);
    
    const haldleClick = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <StyledCurrencyWrapper>
            <StyledCurrency type='button' onClick={haldleClick}>
                <Dollar />
                <span>{objSearchParams.currency}</span>
                <Arrow />
            </StyledCurrency>
            {isActiveMenu && <CurrencyMenu />}
        </StyledCurrencyWrapper>
    );
};