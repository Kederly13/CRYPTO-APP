import styled from 'styled-components';

export const StyledCardLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLineText = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 16px;
`

export const StyledLineValue = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 20px;
    font-weight: 500;
`