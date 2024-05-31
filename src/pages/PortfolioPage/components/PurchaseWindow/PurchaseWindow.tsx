import { useState, FC, ChangeEvent } from 'react';

import { useActions } from 'hooks/useActions';

import { Button } from 'components/Button';
import { ReactComponent as CoinLogo } from 'assets/svg/coin.svg';

import { StyledPurchaseWindow, StyledPurchaseHeader, StyledPurchaseInput, StyledPurchaseTitle, StyledPurchaseWrapper, StyledLogoWrapper, StyledPurchaseForm, StyledDatePicker } from './StyledPurchaseWindow';

interface IPurchaseState {
    selectedCoin: string;
    purchasedAmount: string;
    purchasedDate: Date | null;
};

interface IPurchaseWindowProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PurchaseWindow: FC<IPurchaseWindowProps> = ({ setIsOpen }) => {
    const [ selectedPurchase, setSelectedPurchase ] = useState<IPurchaseState>({
        selectedCoin: '',
        purchasedAmount: '',
        purchasedDate: null
    });

    const { fetchHistoricalData } = useActions();

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

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const controller = new AbortController(); 

        if (!selectedPurchase.selectedCoin || !selectedPurchase.purchasedAmount || !selectedPurchase.purchasedDate) {

            console.log("Please fill in all fields");
            return; 
        };
        
        const formattedDate = selectedPurchase.purchasedDate?.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }).replace(/\//g, '-');

        const payload = {
            coin: selectedPurchase.selectedCoin,
            purchasedDate: formattedDate,
            purchasedAmount: selectedPurchase.purchasedAmount
        };

        fetchHistoricalData({
            payload,
            controller: controller
        });

        setSelectedPurchase({
            selectedCoin: '',
            purchasedAmount: '',
            purchasedDate: null
        });

        setIsOpen(false);
    };

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
                    <StyledDatePicker
                        selected={selectedPurchase.purchasedDate}
                        onChange={(date: Date | null) => handleDateChange(date)}
                        placeholderText='Purchased Date'
                        dateFormat='d, MMMM, yyyy'
                    />
                    <Button type='submit' onClick={handleSubmit}>Save and Continue</Button>
                </StyledPurchaseForm>
            </StyledPurchaseWrapper>
        </StyledPurchaseWindow>
    )
};