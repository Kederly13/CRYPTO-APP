import { useEffect, useState } from 'react';

import { Button } from 'components/Button';
import { Section } from 'components/Section';
import { PortfolioCoin } from './components/PortfolioCoin';
import { Modal } from 'components/Modal';
import { PurchaseWindow } from './components/PurchaseWindow';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectHistoricalData } from 'store/slices/coinsSlice/coinsSlice';

import { SEARCH_PARAMS } from 'constants/searchParams';

import { StyledPortfolioHeader, StyledPortfolioTitle, StyledPorfolioBtns, StyledPortfolio } from './StyledPortfolioPage';


const PortfolioPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const historicalData = useAppSelector(selectHistoricalData);

    const { fetchHistoricalData } = useActions();

    const { currency } = objSearchParams;
    
    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.CURRENCY]: currency || 'usd',
        })

    }, []);

    console.log(historicalData)
    return (
        <Section>
            <button onClick={() => setIsOpen(true)}>toggle</button>
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
                
                {/* {portFolioData && <PortfolioCoin portfolioCoin={portFolioData} />} */}
            </StyledPortfolio>

        </Section>

    )
};

export default PortfolioPage;