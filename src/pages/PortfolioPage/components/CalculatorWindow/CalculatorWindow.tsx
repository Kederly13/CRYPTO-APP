import { useState } from 'react';

import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';
import { useActions } from 'hooks/useActions';

import { CoinDropdown } from '../PurchaseWindow/components/CoinDropdown';

import {
    StyledCalculatorWindow, 
    StyledCalculatorHeader, 
    StyledCalculatorTitle,
    StyledTopWrapper,
    StyledCoinContainer,
    StyledInputContainer
} from './StyledCalculatorWindow';

export const CalculatorWindow = () => {

    const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
    const coinsList = useAppSelector(selectCoinList)

    return (
        <StyledCalculatorWindow>
            <StyledCalculatorHeader>
                <StyledCalculatorTitle>
                    Investment Calculator
                </StyledCalculatorTitle>
            </StyledCalculatorHeader>
            <StyledTopWrapper>
                <StyledCoinContainer>
                    <img  alt='coin logo' />
                    <span></span>
                    <span></span>
                </StyledCoinContainer>
                <StyledInputContainer>

                </StyledInputContainer>
            </StyledTopWrapper>
        </StyledCalculatorWindow>
    )
}