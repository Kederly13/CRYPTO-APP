import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { StyledNavList, StyledNavListItem, StyledLayersIcon, StyledHomeIcon } from './StyledNavList';

export interface IStyledListItemProps{
    $mr?: string;
};

export const NavList: FC = () => {
    const { width } = useResize();
    
    return (
        <StyledNavList>
            <StyledNavListItem $mr='24px'>
                <NavLink to={`/`}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                    <StyledHomeIcon />
                    {width > MEDIA_SIZES.MD && (
                        <span>
                            HOME
                        </span>
                    )}        
                </NavLink>
            </StyledNavListItem>
            <StyledNavListItem>
                <NavLink to ={'/portfolio'}>
                <StyledLayersIcon /> 
                    {width > MEDIA_SIZES.MD && (
                        <span>
                            Portfolio
                        </span>
                    )}      
                </NavLink>
            </StyledNavListItem>
        </StyledNavList>
    )
};