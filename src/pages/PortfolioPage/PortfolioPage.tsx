import { useState } from 'react';

import { Button } from 'components/Button';
import { Section } from 'components/Section';
import { AllCoinsApi } from 'api/AllCoinsApi';
import { PortfolioCoin } from './components/PortfolioCoin';
import { Modal } from 'components/Modal';
import { PurchaseWindow } from './components/PurchaseWindow';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectHistoricalData } from 'store/slices/coinsSlice/coinsSlice';
import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';

import { SEARCH_PARAMS } from 'constants/searchParams';

import { StyledPortfolioHeader, StyledPortfolioTitle, StyledPorfolioBtns, StyledPortfolio } from './StyledPortfolioPage';


const PortfolioPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const historicalData = useAppSelector(selectHistoricalData);

    const { fetchHistoricalData } = useActions();

    const { currency } = objSearchParams;
    

    // useEffect(() => {
    //     onSetObjSearchParams({
    //         [SEARCH_PARAMS.CURRENCY]: currency || 'usd',
    //     })
   
    //     const fetchData = async () => {
    //         try {
    //             const response = await AllCoinsApi.getAllCoinsList();
    //             // console.log(response.data)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData()
    // }, []);
    
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
                                key={coin.id} // Assuming each coin has a unique id
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