import styled from 'styled-components';

import { IStyledPeriodTabProps } from './PeriodFilter';

export const StyledPeriodTab = styled.ul<IStyledPeriodTabProps>`
    padding: 4px;
    max-width: 463px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #232337;
    border-radius: 6px;
    margin-top: 56px;

    & > li {
        background-color: ${({ selected }) => (selected ? 'rgba(97, 97, 222, 0.50)' : '')};
        border: ${({ selected }) => (selected ? '1px solid #7878FF' : '1px solid transparent')};
        transition: 0.5s ease; 
        cursor: pointer;

        &:hover {
            background-color: rgba(97, 97, 222, 0.50);
            border: 1px solid #7878FF;
            border-radius: 6px;
            box-shadow: 4px 4px 20px 8px rgba(120, 120, 255, 0.15);
        }

        > button {
           color: #E4E4F1;
           width: 100%;
           height: 100%;
           padding: 8px 20px;
        }   
    }
`