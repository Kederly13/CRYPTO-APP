import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from 'components/Button';
import { StyledSwitch } from './StyledSwitch';

export const HomeSwitch: FC = () => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation(); 
    
    return (
        <StyledSwitch>
            <Button type='button'  active={pathname === '/' && true} $maxWidth='244px' onClick={() => navigate(`/`)}>
                <span>Coins</span>
            </Button>
            <Button type='button' active={pathname === '/convertor' && true} $maxWidth='244px' onClick={() => navigate(`/convertor`)}>
                <span>Convertor</span>
            </Button>
        </StyledSwitch>
    )
};