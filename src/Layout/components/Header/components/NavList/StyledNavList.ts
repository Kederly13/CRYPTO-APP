import styled from 'styled-components';

import { IStyledListItemProps } from './NavList';
import { ReactComponent as LayersIcon } from 'assets/svg/layers.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/home.svg';

export const StyledNavList = styled.ul`
    display: flex;
`

export const StyledNavListItem = styled.li<IStyledListItemProps>`
    display: flex;
    align-items: center;
    padding: 2px 16px;
    font-weight: 500;
    transition: 0.5s;
    border-radius: 6px;
    margin-right: ${({ $mr }) => $mr ? $mr : 0};
    max-width: 131px;
    border: 1px solid ${({ theme }) => theme.formBorderColor};
    cursor: pointer;
    background: ${({ theme }) => theme.formBackgroundColor};

    & > a {
        display: flex;
        align-items: center;

        &.active {
            & > svg {
                fill: ${({ theme }) => theme.icon.active}
            }
        }
        
        & > svg {
            margin-right: 10px;
        }
    }

    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
        border: 1px solid ${({ theme }) => theme.buttonActiveBorderColor};
    }

    @media(max-width: 768px) {
        padding: 2px 8px;
        & > a {
            & > svg {
                margin-right: 0;
            }
        }
    }

    @media(max-width: 576px) {
        margin-right: 0;
        
        & > a {
            & > svg {
                margin-right: 0;
            }
        }
    }
`

export const StyledLayersIcon = styled(LayersIcon)`
    stroke: ${({ theme }) => theme.layersIcon.stroke};
    fill: ${({ theme }) => theme.homeIcon.fill};
`

export const StyledHomeIcon = styled(HomeIcon)`
    fill: ${({ theme }) => theme.layersIcon.fill};
    stroke: ${({ theme }) => theme.layersIcon.stroke};
`