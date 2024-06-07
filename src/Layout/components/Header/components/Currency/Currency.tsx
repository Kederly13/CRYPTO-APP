import { useState } from 'react';
import { useResize } from 'hooks/useResize';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { CurrencyMenu } from './components/CurrencyMenu';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';

import { StyledCurrency, StyledCurrencyWrapper, StyledDollar} from './StyledCurrency';

export const Currency = () => {
    const { width } = useResize();
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
                {width > MEDIA_SIZES.SM && (
                    <StyledDollar />
                )}    
                <span>{objSearchParams.currency?.toLocaleUpperCase()}</span>
                <Arrow />
            </StyledCurrency>
            {isActiveMenu && <CurrencyMenu onSetShow={haldleClick} />}
        </StyledCurrencyWrapper>
    );
};