import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useResize } from 'hooks/useResize';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { StyledNavList, StyledNavListItem, StyledLayersIcon, StyledHomeIcon } from './StyledNavList';

export interface IStyledListItemProps{
    $mr?: string;
};

export const NavList: FC = () => {
    const { width } = useResize();
    const { objSearchParams } = useSelectedObjSearchParams();
    const { coin, currency, days } = objSearchParams;
    
    const searchParamsDefault = `?coin=${coin || 'bitcoin'}&days=${days || '7'}&currency=${currency || 'usd'}`;
    
    return (
        <StyledNavList>
            <StyledNavListItem $mr='24px'>
                <NavLink to={`/${searchParamsDefault}`}
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
                <NavLink to ={`/portfolio/${searchParamsDefault}`}>
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