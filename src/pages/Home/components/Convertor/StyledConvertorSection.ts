import styled from 'styled-components';
import { IStyledConvertorCoinWrapperProps } from './ConvertorSection';

export const StyledHeading = styled.h2`
        font-size: 20px;
        color: ${({ theme }) => theme.convertorHeading.color};
        font-weight: 500;
`

export const StyledConvertorCoinWrapper = styled.div<IStyledConvertorCoinWrapperProps>`
        max-width: 636px;
        width: 100%;
        padding: 24px;
        border-radius: 16px;
        background-color: ${({ $backgroundColor }) => $backgroundColor};
        
`

export const StyledDateTime = styled.p`
        color: ${({ theme }) => theme.convertorDateTime.color};
        font-size: 16px;
        font-weight: 400;
`

export const StyledConvertorWrapper = styled.div`
        display: flex;
        align-items: center;
        margin-top: 24px;
        
`
export const StyledConvertorSection = styled.div`
        
`
export const StyledSwithcWrapper = styled.button`
        border-radius: 50%;
        background: #FFF;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin: 0 -12px;
        position: relative;
        z-index: 2;
`
