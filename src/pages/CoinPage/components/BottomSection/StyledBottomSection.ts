import styled from 'styled-components';

import { TableProgressBar } from 'components/TableProgresBar';

export const StyledBottomSection = styled.div`
    padding-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
`
export const StyledCardLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:first-child {
        margin-bottom: 32px;
    }
`

export const StyledLineText = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 16px;
    position: relative;
    padding-left: 30px;
`

export const StyledLineValue = styled.span`
    color: ${({ theme }) => theme.primaryFont};
    font-size: 20px;
    font-weight: 500;
`

export const StyledCircle = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: #7878FF; 
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(4px 4px 20px rgba(120, 120, 255, 0.15)); 
`;

export const StyledPlus = styled.span`
  color: white; 
  font-size: 18px; 
  line-height: 24px; 
  font-weight: bold;
`;

export const StyledProgressBar = styled(TableProgressBar)`
    margin-top: 15px;
`
