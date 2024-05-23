import { useState } from 'react';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { CurrencyMenu } from './components/CurrencyMenu';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';
import { ReactComponent as Dollar } from 'assets/svg/dollar.svg';

import { StyledCurrency, StyledCurrencyWrapper } from './StyledCurrency';

export const Currency = () => {
    const { objSearchParams } = useSelectedObjSearchParams();
    const [isActiveMenu, setActiveMenu] = useState(false);
    
    const haldleClick = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <StyledCurrencyWrapper>
            <StyledCurrency 
                type='button' 
                onClick={(e) => {
                    e.stopPropagation()
                    haldleClick()
                }}
            >
                <Dollar />
                <span>{objSearchParams.currency?.toLocaleUpperCase()}</span>
                <Arrow />
            </StyledCurrency>
            {isActiveMenu && <CurrencyMenu onSetShow={haldleClick} />}
        </StyledCurrencyWrapper>
    );
};