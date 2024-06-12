import styled from 'styled-components';

import { IStyledPeriodTabProps } from './PeriodFilter';

export const StyledPeriodTab = styled.ul<IStyledPeriodTabProps>`
    padding: 4px;
    max-width: 463px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.periodFilter.background};
    border-radius: 6px;
    margin-top: 56px;

    @media(max-width: 1400px) {
            margin-top: 20px; 
        }
    

    & > li {
        border: 1px solid transparent;
        color: ${({ theme }) => theme.periodFilter.font}; 
        &.selected, &:hover {
            background-color: ${({ theme }) => theme.periodFilter.selectedBackground};
            border-color: ${({ theme }) => theme.periodFilter.borderColor};
            transition: 0.5s ease; 
            cursor: pointer;
            border-radius: 6px;
            box-shadow: 4px 4px 20px 8px rgba(120, 120, 255, 0.15);
            color: ${({ theme }) => theme.periodFilter.selectedFont};
        }   

        > button {
           
           width: 100%;
           height: 100%;
           padding: 8px 20px;
           color: inherit;
        }   
    }
`