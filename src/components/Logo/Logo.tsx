import { FC } from 'react';
import { StyledLogo } from './StyledLogo';

import logo from 'assets/svg/logo.svg'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg';

export const Logo: FC = () => (
    <StyledLogo>
        <LogoIcon fill='green'/>
        {/* <img src={logo} alt='logo'/> */}
        <span>Logoipsm</span>
    </StyledLogo>    
);