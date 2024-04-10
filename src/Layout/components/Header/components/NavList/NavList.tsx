import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import Home from 'assets/svg/home.svg';
import Layer from 'assets/svg/layers.svg';

import { StyledNavList, StyledNavListItem } from './StyledNavList';

// interface NavListProps {
//     children: ReactNode;
// }

export interface IStyledListItemProps{
    $mr?: string;
};

export const NavList: FC = () => {
    const { width } = useResize();
    return (
        <StyledNavList>
            <StyledNavListItem $mr='24px'>
                <Link to={'/'}>
                    <img src={Home} alt='logo'/>
                    {width > MEDIA_SIZES.SM && (
                        <span>
                            HOME
                        </span>
                    )}        
                </Link>
            </StyledNavListItem>
            <StyledNavListItem>
                <Link to ={'/'}>
                    <img src={Layer} alt='Layer'/>
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