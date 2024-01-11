import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Home from 'assets/svg/home.svg';
import Layer from 'assets/svg/layers.svg';

// import { ReactComponent as Logo} from 'assets/svg/logo.svg';

import { StyledNavList } from './StyledNavList';

// interface NavListProps {
//     children: ReactNode;
// }

export const NavList: FC = () => (
    <StyledNavList>
        {/* <Link to={'/'}> */}
            <li>
                <img src={Home} alt='logo'/>        
                <span>
                    HOME
                </span>
            </li>
        {/* </Link> */}
        <li>
            <img src={Layer} alt='Layer'/>
            <span>
                Portfolio
            </span>
        </li>
    </StyledNavList>
);