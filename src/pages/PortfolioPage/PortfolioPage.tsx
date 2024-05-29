import { useEffect, useState } from 'react';

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
    const [isOpen, setIsOpen] = useState(false);

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
            <button onClick={() => setIsOpen(true)}>toggle</button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                children={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.'}
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