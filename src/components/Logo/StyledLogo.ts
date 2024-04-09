import styled from 'styled-components';

import { MEDIA_SIZES } from 'constants/mediaSizes';

interface StyledLogoProps {
    marginRight?: string; // Optional prop for marginRight
};

export const StyledLogo = styled.div<StyledLogoProps>`
    display: flex;
    align-items: center;
    margin-right: ${({ marginRight }) => marginRight || '194px'};

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

    @media(max-width: 992px) {
        margin-right: 0;
    }
`;