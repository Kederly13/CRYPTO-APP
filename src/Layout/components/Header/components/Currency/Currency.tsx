import { useState } from 'react';

import { CurrencyMenu } from './components/CurrencyMenu';

import { Arrow } from 'assets/svg/arrow';
import { Dollar } from 'assets/svg/dollar';

import { StyledCurrency } from './StyledCurrency';

export const Currency = () => {

    const [isActiveMenu, setActiveMenu] = useState(false);

    const haldleClick = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <>
            <StyledCurrency type='button' onClick={haldleClick}>
                <div >
                    <Dollar /><span>USD</span>
                    <Arrow />
                </div>
                {isActiveMenu && <CurrencyMenu />}
            </StyledCurrency>
        </>
    );
};