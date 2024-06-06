import styled from "styled-components";

export const StyledConvertorInput = styled.input`
    color: ${({ theme }) => theme.coinPrice.color};
    font-size: 24px;
    font-weight: 700;
    width: auto;
    border: 1px solid white;

    @media(max-width: 576px) {
        width: 40%;
    }
`