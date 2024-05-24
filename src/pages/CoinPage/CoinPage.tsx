import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Section } from 'components/Section';
import { UpperSection } from './components/UpperSection';
import { BottomSection } from './components/BottomSection/BottomSection';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/reduxHooks';

import { selectCoinSummary, selectCoinSummaryError, selectCoinSummaryLoading } from 'store/slices/coinsSlice/coinsSlice';

import { StyledCoinPageTitle, StyledCoinPage } from './StyledCoinPage';

import { SEARCH_PARAMS } from 'constants/searchParams';

const CoinPage = () => {
    const coinSummary = useAppSelector(selectCoinSummary);
    const coinSummaryLoading = useAppSelector(selectCoinSummaryLoading);
    const coinSummaryError = useAppSelector(selectCoinSummaryError);

    const { id } = useParams<{ id: string }>();
    const { fetchCoinSummary } = useActions();
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const notify = () => {
        toast.success('success', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            theme: "dark",
            transition: Bounce,
        });
    }

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

    useEffect(() => {
        if (coinSummary && !coinSummaryLoading && !coinSummaryError) {
            toast.success('Data fetched successfully!');
        }

        if (coinSummaryError) {
            toast.error('Failed to fetch data.');
        }
    }, [coinSummary, coinSummaryLoading, coinSummaryError]);
    
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