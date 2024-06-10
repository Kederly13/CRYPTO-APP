import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from 'components/Button';
import { StyledSwitch } from './StyledSwitch';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

export const HomeSwitch: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { objSearchParams } = useSelectedObjSearchParams();
    const { coin, currency, days } = objSearchParams;
    
    const searchParamsDefault = `?coin=${coin || 'bitcoin'}&days=${days || '7'}&currency=${currency || 'usd'}`;
    
    return (
        <StyledSwitch>
            <Button type='button'  active={pathname === '/' && true} $maxWidth='244px' onClick={() => navigate(`/${searchParamsDefault}`)}>
                <span>Coins</span>
            </Button>
            <Button type='button' active={pathname === '/convertor' && true} $maxWidth='244px' onClick={() => navigate(`/convertor${searchParamsDefault}`)}>
                <span>Convertor</span>
            </Button>
        </StyledSwitch>
    )
};