import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';


import { ReactComponent as LayersIcon } from 'assets/svg/layers.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';

import { StyledNavList, StyledNavListItem } from './StyledNavList';
import { themes } from 'styles/themes';
import { useTheme } from 'hooks/useTheme';
import { THEME } from 'constants/theme';

export interface IStyledListItemProps{
    $mr?: string;
};

export const NavList: FC = () => {
    const { width } = useResize();
    const { theme } = useTheme();
    

    return (
        <StyledNavList>
            <StyledNavListItem $mr='24px'>
                <NavLink to={'/'}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                    {/* <Home stroke={theme === THEME.DARK ? 'white' : 'black'} fill={theme === THEME.DARK ? 'white' : 'black'}/> */}
                    <HomeIcon />
                    {width > MEDIA_SIZES.SM && (
                        <span>
                            HOME
                        </span>
                    )}        
                </NavLink>
            </StyledNavListItem>
            <StyledNavListItem>
                <NavLink to ={'/'}>
                {/* <LayersIcon stroke={theme === THEME.DARK ? 'white' : 'black'} fill={theme === THEME.DARK ? 'white' : 'black'}/> */}
                <LayersIcon /> 
                    {width > MEDIA_SIZES.SM && (
                        <span>
                            Portfolio
                        </span>
                    )}      
                </NavLink>
            </StyledNavListItem>
        </StyledNavList>
    )

};