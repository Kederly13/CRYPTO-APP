import styled from 'styled-components';
import { IStyledConvertorCoinWrapperProps } from './ConvertorWrapper';

export const StyledConvertorCoinWrapper = styled.div<IStyledConvertorCoinWrapperProps>`
        max-width: 636px;
        width: 100%;
        padding: 24px;
        border-radius: 16px;
        background-color: ${({ $backgroundColor }) => $backgroundColor};

        @media(max-width: 1400px) {
                flex-direction: column;
                max-width: 100%;
                
        }
`

export const StyledConvertorWrapper = styled.div`
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 72px;

        @media(max-width: 1400px) {
                flex-direction: column; 
        }
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