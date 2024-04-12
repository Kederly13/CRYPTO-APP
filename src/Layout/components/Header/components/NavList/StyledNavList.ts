import styled from 'styled-components';

import { IStyledListItemProps } from './NavList';

export const StyledNavList = styled.ul`
    display: flex;
`;

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

    & > a {
        display: flex;
        align-items: center;

        & > svg {
            margin-right: 10px;
        }
    }

    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
        border: 1px solid ${({ theme }) => theme.buttonActiveBorderColor};
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