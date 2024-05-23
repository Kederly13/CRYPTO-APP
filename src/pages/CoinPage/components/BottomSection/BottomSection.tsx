import { StyledBottomSection, StyledCardLine, StyledLineText, StyledLineValue } from './StyledBottomSection';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinSummary, selectCoinSummaryError, selectCoinSummaryLoading } from 'store/slices/coinsSlice/coinsSlice';
import { CoinPageCard } from '../CoinPageCard';

export const BottomSection = () => {
    const coinSummary = useAppSelector(selectCoinSummary);
    const coinSummaryLoading = useAppSelector(selectCoinSummaryLoading);
    const coinSummaryError = useAppSelector(selectCoinSummaryError);

    let volumeToMarketCapRatio;
    let fullyDilutedValuation;

    const {
        total_volume,
        circulating_supply,
        market_cap,
        max_supply,
        current_price
    } = coinSummary?.market_data || {};

    if (total_volume && market_cap) {
        volumeToMarketCapRatio = total_volume.usd / market_cap.usd;
    };

    if (current_price?.usd && max_supply) {
        fullyDilutedValuation = current_price.usd * max_supply;
    };

    return (
        <StyledBottomSection>
            <CoinPageCard $maxWidth='640px'>
                <StyledCardLine >
                    <StyledLineText>Total Volume</StyledLineText>
                    <StyledLineValue>{total_volume?.btc}</StyledLineValue>
                </StyledCardLine>
                <StyledCardLine>
                    <StyledLineText>Volume/Market</StyledLineText>
                    <StyledLineValue>{volumeToMarketCapRatio && volumeToMarketCapRatio.toFixed(2)}</StyledLineValue>
                </StyledCardLine>
            </CoinPageCard>
            <CoinPageCard $maxWidth='640px'>
                <StyledCardLine >
                    <StyledLineText>Max Supply</StyledLineText>
                    <StyledLineValue>{max_supply ? max_supply : 'No data'}</StyledLineValue>
                </StyledCardLine>
                <StyledCardLine>
                    <StyledLineText>Circulating Supply</StyledLineText>
                    <StyledLineValue>{circulating_supply?.toFixed(2)}</StyledLineValue>
                </StyledCardLine>
            </CoinPageCard>
            <CoinPageCard $maxWidth='640px'>
                <StyledCardLine>
                    <StyledLineText>Market Cap</StyledLineText>
                    <StyledLineValue>${market_cap?.usd}</StyledLineValue>
                </StyledCardLine>
                <StyledCardLine>
                    <StyledLineText>Fully Diluted Valuation</StyledLineText>
                    <StyledLineValue>{fullyDilutedValuation ? '$' + fullyDilutedValuation?.toFixed(2) : 'No data'}</StyledLineValue>
                </StyledCardLine>
                {/* <CardLine text='Market Cap' value={} />
                <CardLine text='Fully Diluted Valuation' value={} /> */}
            </CoinPageCard> 
        </StyledBottomSection>
    )
}