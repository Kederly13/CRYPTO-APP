import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Section } from 'components/Section';
import { UpperSection } from './components/UpperSection';
import { BottomSection } from './components/BottomSection/BottomSection';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';

import { StyledCoinPageTitle, StyledCoinPage } from './StyledCoinPage';

import { SEARCH_PARAMS } from 'constants/searchParams';

const CoinPage = () => {
    const { id } = useParams<{ id: string }>();
    const { fetchCoinSummary } = useActions();
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency || 'usd',
        })
    }, [])

    useEffect(() => {
        const controller = new AbortController();
        if (id) {
            fetchCoinSummary({ coin: id, controller: controller });
        }

        return () => controller.abort();
    }, [id]);
    
    return (
        <Section>
            <StyledCoinPage>
                <StyledCoinPageTitle>
                    Coin Summary
                </StyledCoinPageTitle>
                <UpperSection />
                <BottomSection />
            </StyledCoinPage>
        </Section>
    )
};

export default CoinPage;