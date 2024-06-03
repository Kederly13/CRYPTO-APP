import { useState, FC, ChangeEvent } from 'react';

import { Button } from 'components/Button';
import { SearchList } from 'components/SearchList';

import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';
import { useActions } from 'hooks/useActions';

import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';
import { ReactComponent as CoinLogo } from 'assets/svg/coin.svg';

import { StyledInputContainer, StyledPurchaseWindow, StyledPurchaseHeader, StyledPurchaseInput, StyledPurchaseTitle, StyledPurchaseWrapper, StyledLogoWrapper, StyledPurchaseForm, StyledDatePicker } from './StyledPurchaseWindow';

interface IPurchaseState {
    selectedCoin: string;
    purchasedAmount: string;
    purchasedDate: Date | null;
};

interface IPurchaseWindowProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type DropdownKey = 'coinDropdown' | 'amountDropdown' | 'dateDropdown';

export const PurchaseWindow: FC<IPurchaseWindowProps> = ({ setIsOpen }) => {
    const [activeDropdowns, setActiveDropdowns] = useState({
        coinDropdown: false,
        amountDropdown: false,
        dateDropdown: false
    });
    const [ selectedPurchase, setSelectedPurchase ] = useState<IPurchaseState>({
        selectedCoin: '',
        purchasedAmount: '',
        purchasedDate: null
    });

    const coinsList = useAppSelector(selectCoinList)

    const { fetchHistoricalData } = useActions();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setActiveDropdowns(prevState => ({
            ...prevState,
            coinDropdown: true
        }));

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

    const toggleDropdown = (dropdown: DropdownKey) => {
        setActiveDropdowns(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }))
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

        handleClose();
    };

    const handleClose = () => {
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
                    <StyledInputContainer>
                        <StyledPurchaseInput
                            type='text'
                            name='selectedCoin'
                            value={selectedPurchase.selectedCoin}
                            onChange={handleChange}
                            placeholder='Select Coin'
                        />
                        <button type='button' onClick={() => toggleDropdown('coinDropdown')}>
                            <Arrow />
                        </button>
                        
                        {activeDropdowns.coinDropdown === true && (
                            <SearchList
                                coins={coinsList}
                                searchQuery={selectedPurchase.selectedCoin}
                                handleActiveMenu={() => toggleDropdown('coinDropdown')} 
                            />
                        )}
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledPurchaseInput
                            type='number'
                            name='purchasedAmount'
                            value={selectedPurchase.purchasedAmount}
                            onChange={handleChange}
                            placeholder='Purchased Amount'
                        />
                        <Arrow />
                    </StyledInputContainer>
                    <StyledDatePicker
                        selected={selectedPurchase.purchasedDate}
                        onChange={(date: Date | null) => handleDateChange(date)}
                        placeholderText='Purchased Date'
                        dateFormat='d, MMMM, yyyy'
                    />
                    <div className='btns'>
                        <Button type='submit' onClick={handleSubmit} $maxWidth='47.5%'>Save and Continue</Button>
                        <Button type='button' onClick={handleClose} $maxWidth='47.5%'>Cancel</Button>
                    </div>
                </StyledPurchaseForm>
            </StyledPurchaseWrapper>
        </StyledPurchaseWindow>
    )
};