import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledLogo } from './StyledLogo';

import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg';

export const Logo: FC = () => {
    const { search } = useLocation();

    return (
        <StyledLogo to={`/${search}`}>
            <LogoIcon fill='green'/>
            <span>Logoipsm</span>
        </StyledLogo> 
    )
};