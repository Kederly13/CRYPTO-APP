import { useEffect } from 'react';

import { Section } from 'components/Section';
import { StyledCoinPageTitle } from './StyledCoinPage';
import { useParams } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { useAppDispatch } from 'hooks/reduxHooks';
import { selectCoinSummary } from 'store/slices/coinsSlice/coinsSlice';
import { useAppSelector } from 'hooks/reduxHooks';


const CoinPage = () => {
    const { id } = useParams<{ id: string }>();
    const { fetchCoinSummary } = useActions();
    const dispatch = useAppDispatch();
    const coinSummary = useAppSelector(selectCoinSummary)
    console.log(coinSummary)

    useEffect(() => {
        const controller = new AbortController();
        if (id) {
            dispatch(fetchCoinSummary({ coin: id, controller: controller }));
        }
    }, [id]);
    
    return (
        <Section>
            <StyledCoinPageTitle>
                Coin Summary
            </StyledCoinPageTitle>
        </Section>
    )
};

export default CoinPage;