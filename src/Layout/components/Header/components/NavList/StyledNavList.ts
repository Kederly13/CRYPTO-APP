import styled from 'styled-components';

import { IStyledListItemProps } from './NavList';

export const StyledNavList = styled.ul`
    display: flex;
`;

export const StyledNavListItem = styled.li<IStyledListItemProps>`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    font-weight: 500;
    transition: 0.5s;
    border-radius: 6px;
    margin-right: ${({ $mr }) => $mr ? $mr : 0};
    max-width: 131px;

    & > a {
        display: flex;
        align-items: center;

        & > img {
            margin-right: 10px;
        }
    }

    &:hover {
        background-color: rgba(97, 97, 222, 0.50);
    }

    @media(max-width: 576px) {
        margin-right: 0;

        & > a {

            & > img {
                margin-right: 0;
            }
        }
    }

`