import { useState } from 'react';

import { Arrow } from 'assets/svg/arrow';
import { Dollar } from 'assets/svg/dollar';

import { StyledCurrency } from './StyledCurrency';

export const Currency = () => {

    const [isActiveMenu, setActiveMenu] = useState(false);

    const haldleClick = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <StyledCurrency>
            <button type='button' onClick={haldleClick}>
                <Dollar /><span>USD</span><Arrow />
            </button>
        </StyledCurrency>
    );
};