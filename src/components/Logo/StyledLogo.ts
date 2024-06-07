import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IStyledLogoProps {
    marginRight?: string; // Optional prop for marginRight
};

export const StyledLogo = styled(NavLink)<IStyledLogoProps>`
    display: flex;
    align-items: center;

    & > span {
        font-size: 21px;
        font-weight: 700;
        margin-left: 10px;

        @media (max-width: 576px) {
            display: none;
            
        }
    }

    & > img {
        object-fit: contain;
    }

    @media(max-width: 576px) {
        margin-right: 10px;
    }
`;