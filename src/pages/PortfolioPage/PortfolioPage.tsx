import { useState, useEffect } from 'react';

import { Button } from 'components/Button';
import { Section } from 'components/Section';
import { AllCoinsApi } from 'api/AllCoinsApi';
import { PortfolioCoin } from './components/PortfolioCoin';
import { Modal } from 'components/Modal';
import { PurchaseWindow } from './components/PurchaseWindow';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectHistoricalData, removePortfolioCoin, selectCoinList } from 'store/slices/coinsSlice/coinsSlice';

import { SEARCH_PARAMS } from 'constants/searchParams';

import { StyledPortfolioHeader, StyledPortfolioTitle, StyledPorfolioBtns, StyledPortfolio } from './StyledPortfolioPage';


const PortfolioPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const historicalData = useAppSelector(selectHistoricalData);

    const { fetchHistoricalData, } = useActions();

    const { currency } = objSearchParams;

    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency || 'usd',
        })
    }, []);
    
    console.log(historicalData)
    return (
        <Section>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                children={<PurchaseWindow setIsOpen={setIsOpen} />}
            />
            <StyledPortfolio>
                <StyledPortfolioHeader>
                    <StyledPortfolioTitle>
                        Portfolio
                    </StyledPortfolioTitle>
                    <StyledPorfolioBtns>
                        <Button type='button' $maxWidth='300px'>Investment Calculator</Button>
                        <Button type='button' onClick={() => setIsOpen(true)} $maxWidth='300px'>Add Assets</Button>
                    </StyledPorfolioBtns>
                </StyledPortfolioHeader>
                <>
                    {historicalData ? (
                        historicalData.map((coin) => (
                            <PortfolioCoin
                                key={coin.id} 
                                historicalData={coin}
                            />
                        ))
                    ) : (
                        ''
                    )}
                </>
            </StyledPortfolio>

        </Section>

    )
};

export default PortfolioPage;