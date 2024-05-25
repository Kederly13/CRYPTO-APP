import { useEffect } from 'react';

import { Button } from 'components/Button';
import { Section } from 'components/Section';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectPortfolioData, selectPortfolioDataError, selectPortfolioDataLoading } from 'store/slices/coinsSlice/coinsSlice';

import { SEARCH_PARAMS } from 'constants/searchParams';

import { StyledPortfolioHeader, StyledPortfolioTitle, StyledPorfolioBtns, StyledPortfolio } from './StyledPortfolioPage';


const PortfolioPage = () => {
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    // const portFolioData = useAppSelector(selectPortfolioData);
    // console.log(portFolioData)
    const { fetchPortfolioData } = useActions();
    
    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency || 'usd',
        })
        const controller = new AbortController(); 
        
        fetchPortfolioData({ 
            payload: { coin: 'bitcoin', currency: 'usd' }, 
            controller: controller 
        });
    
        return () => {
            controller.abort();
        }; 
    }, []);


    return (
        <Section>
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
            </StyledPortfolio>

        </Section>

    )
};

export default PortfolioPage;