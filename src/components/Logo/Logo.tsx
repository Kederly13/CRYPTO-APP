import { FC } from 'react';
import { StyledLogo } from './StyledLogo';

import logo from 'assets/svg/logo.svg'

export const Logo: FC = () => (
    <StyledLogo>
        <img src={logo} alt='logo'/>
        <span>Logoipsm</span>
    </StyledLogo>    
);