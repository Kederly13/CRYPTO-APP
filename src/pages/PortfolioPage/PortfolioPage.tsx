import { useEffect } from 'react';

import { Button } from 'components/Button';
import { Section } from 'components/Section';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { SEARCH_PARAMS } from 'constants/searchParams';

import { StyledPortfolioHeader, StyledPortfolioTitle, StyledPorfolioBtns, StyledPortfolio } from './StyledPortfolioPage';


const PortfolioPage = () => {

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency || 'usd',
        })
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