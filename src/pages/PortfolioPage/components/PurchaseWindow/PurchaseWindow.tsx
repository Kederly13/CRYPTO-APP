import { useState, FC, ChangeEvent } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as CoinLogo } from 'assets/svg/coin.svg';

import { StyledPurchaseWindow, StyledPurchaseHeader, StyledPurchaseInput, StyledPurchaseTitle, StyledPurchaseWrapper, StyledLogoWrapper, StyledPurchaseForm } from './StyledPurchaseWindow';

interface IPurchaseState {
    selectedCoin: string;
    purchasedAmount: string;
    purchasedDate: Date | null;
};

export const PurchaseWindow: FC = () => {
    const [ selectedPurchase, setSelectedPurchase ] = useState<IPurchaseState>({
        selectedCoin: '',
        purchasedAmount: '',
        purchasedDate: null
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setSelectedPurchase(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleDateChange = (date: Date | null) => {
        if (date !== null) {
            setSelectedPurchase(prevState => ({
                ...prevState,
                purchasedDate: date 
            }));
        }

    };

    console.log(selectedPurchase)

    return (
        <StyledPurchaseWindow>
            <StyledPurchaseHeader>
                <StyledPurchaseTitle>
                    Select coins
                </StyledPurchaseTitle>
            </StyledPurchaseHeader>
            <StyledPurchaseWrapper>
                <StyledLogoWrapper>
                    <CoinLogo />
                    <span>Your Coin</span>
                </StyledLogoWrapper>
                <StyledPurchaseForm>
                    <StyledPurchaseInput
                        type='text'
                        name='selectedCoin'
                        value={selectedPurchase.selectedCoin}
                        onChange={handleChange}
                        placeholder='Select Coin'
                    />
                    <StyledPurchaseInput
                        type='number'
                        name='purchasedAmount'
                        value={selectedPurchase.purchasedAmount}
                        onChange={handleChange}
                        placeholder='Purchased Amount'
                    />
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date | null) => handleDateChange(date)}
                        placeholderText='Purchased Date'
                        dateFormat='MMMM d, yyyy'
                    />
                </StyledPurchaseForm>
            </StyledPurchaseWrapper>
        </StyledPurchaseWindow>
    )
};