import { StyledBottomSection } from './StyledBottomSection';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinSummary, selectCoinSummaryError, selectCoinSummaryLoading } from 'store/slices/coinsSlice/coinsSlice';
import { CoinPageCard } from '../CoinPageCard';
import { CardLine } from './components/CardLine';

export const BottomSection = () => {
    const coinSummary = useAppSelector(selectCoinSummary);
    const coinSummaryLoading = useAppSelector(selectCoinSummaryLoading);
    const coinSummaryError = useAppSelector(selectCoinSummaryError);

       const {
        total_volume,
        circulating_supply,
        market_cap,
        fully_diluted_valuation,
        max_supply,
    } = coinSummary?.market_data || {};
   

    return (
        <StyledBottomSection>
            <></>
            {/* <CoinPageCard>
                <CardLine text='Total Volume' value={} />
                <CardLine text='Volume 24h' value={} />
                <CardLine text='Volume/Market' value={} />
            </CoinPageCard>
            <CoinPageCard>
                <CardLine text='Max Supply' value={} />
                <CardLine text='Circulating Supply' value={} />
                
            </CoinPageCard>
            <CoinPageCard>
                <CardLine text='Market Cap' value={} />
                <CardLine text='Fully Diluted Valuation' value={} />
            </CoinPageCard> */}
        </StyledBottomSection>
    )
}