import styled from 'styled-components';

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
    }

    & > img {
        object-fit: contain;
    }
`;

// export const StyledLogo = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// export const LogoText = styled.span`
//     font-size: 21px;
//     font-weight: 700;
//     margin-left: 10px;
// `;