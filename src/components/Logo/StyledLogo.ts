import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IStyledLogoProps {
    marginRight?: string; 
};

export const StyledLogo = styled(NavLink)<IStyledLogoProps>`
    display: flex;
    align-items: center;
    margin-right: 178px;

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

    @media(max-width: 1024px) {
        margin-right: 90px;
    }

    @media(max-width: 768px) {
        margin-right: 50px;
    }

    @media(max-width: 576px) {
        margin-right: 10px;
    }
`;