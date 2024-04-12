import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { Home } from 'assets/svg/Home';
import { Layers } from 'assets/svg/Layers';

import { StyledNavList, StyledNavListItem } from './StyledNavList';
import { themes } from 'styles/themes';
import { useTheme } from 'hooks/useTheme';
import { THEME } from 'constants/theme';

// interface NavListProps {
//     children: ReactNode;
// }

export interface IStyledListItemProps{
    $mr?: string;
};

export const NavList: FC = () => {
    const { width } = useResize();
    const { theme } = useTheme();

    return (
        <StyledNavList>
            <StyledNavListItem $mr='24px'>
                <Link to={'/'}>
                    <Home stroke={theme === THEME.DARK ? 'white' : 'black'} fill={theme === THEME.DARK ? 'white' : 'black'}/>
                    {width > MEDIA_SIZES.SM && (
                        <span>
                            HOME
                        </span>
                    )}        
                </Link>
            </StyledNavListItem>
            <StyledNavListItem>
                <Link to ={'/'}>
                <Layers stroke={theme === THEME.DARK ? 'white' : 'black'} fill={theme === THEME.DARK ? 'white' : 'black'}/>
                    {width > MEDIA_SIZES.SM && (
                        <span>
                            Portfolio
                        </span>
                    )}      
                </Link>
            </StyledNavListItem>
        </StyledNavList>
    )

};