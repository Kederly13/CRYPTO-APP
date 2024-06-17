import { useAppSelector } from 'hooks/reduxHooks';

import { selectCoinSummary } from 'store/slices/coinsSlice/coinsSlice';

import { CoinPageCard } from '../CoinPageCard';

import { StyledBottomSection, StyledCardLine, StyledLineText, StyledLineValue, StyledProgressBar, StyledCircle, StyledPlus } from './StyledBottomSection';

export const BottomSection = () => {
    const coinSummary = useAppSelector(selectCoinSummary);

    let volumeToMarketCapRatio;
    let fullyDilutedValuation;

    const {
        total_volume,
        circulating_supply,
        market_cap,
        max_supply,
        current_price,
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
                    <StyledCircle >
                        <StyledPlus>+</StyledPlus>
                    </StyledCircle>
                    <StyledLineText>Total Volume</StyledLineText>
                    <StyledLineValue>{total_volume?.btc}</StyledLineValue>
                </StyledCardLine>
                <StyledCardLine>
                    <StyledCircle>
                        <StyledPlus>+</StyledPlus>
                    </StyledCircle>
                    <StyledLineText>Volume/Market</StyledLineText>
                    <StyledLineValue>{volumeToMarketCapRatio && volumeToMarketCapRatio.toFixed(2)}</StyledLineValue>
                </StyledCardLine>
            </CoinPageCard>
            <CoinPageCard $maxWidth='640px'>
                <StyledCardLine>
                    <StyledCircle>
                        <StyledPlus>+</StyledPlus>
                    </StyledCircle>
                    <StyledLineText>Max Supply</StyledLineText>
                    <StyledLineValue>{max_supply ? max_supply : 'No data'}</StyledLineValue>
                </StyledCardLine>
                <StyledCardLine>
                    <StyledCircle>
                        <StyledPlus>+</StyledPlus>
                    </StyledCircle>
                    <StyledLineText>Circulating Supply</StyledLineText>
                    <StyledLineValue>{circulating_supply?.toFixed(2)}</StyledLineValue>
                </StyledCardLine>
                <StyledProgressBar 
                    marginTop='15px'
                    value={circulating_supply ? circulating_supply: 0}
                    max={max_supply ? max_supply : 0 }
                />
            </CoinPageCard>
            <CoinPageCard $maxWidth='640px'>
                <StyledCardLine>
                    <StyledCircle>
                        <StyledPlus>+</StyledPlus>
                    </StyledCircle>
                    <StyledLineText>Market Cap</StyledLineText>
                    <StyledLineValue>${market_cap?.usd}</StyledLineValue>
                </StyledCardLine>
                <StyledCardLine>
                    <StyledCircle>
                        <StyledPlus>+</StyledPlus>
                    </StyledCircle>
                    <StyledLineText>Fully Diluted Valuation</StyledLineText>
                    <StyledLineValue>{fullyDilutedValuation ? fullyDilutedValuation?.toFixed(2) : 'No data'}</StyledLineValue>
                </StyledCardLine>
            </CoinPageCard> 
        </StyledBottomSection>
    )
}