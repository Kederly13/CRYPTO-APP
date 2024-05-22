import { useEffect } from 'react';

import { Section } from 'components/Section';
import { UpperSection } from './components/UpperSection';
import { BottomSection } from './components/BottomSection/BottomSection';
import { StyledCoinPageTitle } from './StyledCoinPage';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { selectCoinSummary } from 'store/slices/coinsSlice/coinsSlice';
import { useAppSelector } from 'hooks/reduxHooks';


const CoinPage = () => {
    const { id } = useParams<{ id: string }>();
    const { fetchCoinSummary } = useActions();

    useEffect(() => {
        const controller = new AbortController();
        if (id) {
            fetchCoinSummary({ coin: id, controller: controller });
        }

        return () => controller.abort();
    }, [id]);
    
    return (
        <Section>
            <StyledCoinPageTitle>
                Coin Summary
            </StyledCoinPageTitle>
            <UpperSection />
            <BottomSection />
        </Section>
    )
};

export default CoinPage;