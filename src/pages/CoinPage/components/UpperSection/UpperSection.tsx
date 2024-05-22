import { StyledUpperSection } from './StyledUpperSection';
import { CoinSummary } from './components/CoinSummary';
import { selectCoinSummary, selectCoinSummaryError, selectCoinSummaryLoading } from 'store/slices/coinsSlice/coinsSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import { CoinDescription } from './components/CoinDescription';

export const UpperSection = () => {
    const coinSummary = useAppSelector(selectCoinSummary);
    const coinSummaryLoading = useAppSelector(selectCoinSummaryLoading);
    const coinSummaryError = useAppSelector(selectCoinSummaryError);

    if (coinSummaryLoading) {
        return (
            <StyledUpperSection>
                <p>Loading...</p>
            </StyledUpperSection>
        );
    }

    return ( /// Почему оно требует обертки???
        <StyledUpperSection>
            {coinSummary ?
            <>
                <CoinSummary coinSummary={coinSummary} />
                <CoinDescription coinSummary={coinSummary} />
            </>  
            : 
            <p>No data available.</p>}
        </StyledUpperSection>

    )
}