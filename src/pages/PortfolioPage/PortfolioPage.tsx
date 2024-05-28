import { useEffect } from 'react';

import { Button } from 'components/Button';
import { Section } from 'components/Section';
import { PortfolioCoin } from './components/PortfolioCoin';
import { Modal } from 'components/Modal';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectPortfolioData, selectPortfolioDataError, selectPortfolioDataLoading } from 'store/slices/coinsSlice/coinsSlice';

import { SEARCH_PARAMS } from 'constants/searchParams';

import { StyledPortfolioHeader, StyledPortfolioTitle, StyledPorfolioBtns, StyledPortfolio } from './StyledPortfolioPage';


const PortfolioPage = () => {
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const portFolioData = useAppSelector(selectPortfolioData);
    console.log(portFolioData)
    const { fetchPortfolioData } = useActions();

    const { currency } = objSearchParams;
    
    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency || 'usd',
        })
        
    }, []);

    useEffect(() => {
        const controller = new AbortController(); 

        if (currency) {
            fetchPortfolioData({ 
                payload: { coin: 'bitcoin', currency: currency }, 
                controller: controller 
            });
        };
    
        return () => {
            controller.abort();
        }; 
    }, [currency])


    return (
        <Section>
            <Modal
                    children={'hahaha'} 
                />
            <StyledPortfolio>
                <StyledPortfolioHeader>
                    <StyledPortfolioTitle>
                        Portfolio
                    </StyledPortfolioTitle>
                    <StyledPorfolioBtns>
                        <Button type='button' $maxWidth='300px'>Investment Calculator</Button>
                        <Button type='button' $maxWidth='300px'>Add Assets</Button>
                    </StyledPorfolioBtns>
                </StyledPortfolioHeader>
                
                {portFolioData && <PortfolioCoin portfolioCoin={portFolioData} />}
            </StyledPortfolio>

        </Section>

    )
};

export default PortfolioPage;