import { FC } from 'react';

import { CoinPageCard } from 'pages/CoinPage/components/CoinPageCard';

import { ICoinPageProps } from '../../types';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import {
    StyledCoinSummary,
    StyledCoinTitle, 
    StyledCoinName, 
    StyledHomeLink, 
    StyledPrice, 
    StyledTimeBlock, 
    StyledTimeLine, 
    StyledTimeText, 
    StyledTimePrice, 
    StyledDate 
} from './StyledCoinSummary';

import { getConvertedDateCoinPage } from 'utils/getConvertedDateCoinPage';

 export const CoinSummary: FC<ICoinPageProps> = ({ coinSummary }) => {
    const { objSearchParams } = useSelectedObjSearchParams();

    const { currency } = objSearchParams;

    const athDate = currency && coinSummary?.market_data?.ath_date?.[currency]
    ? getConvertedDateCoinPage(coinSummary.market_data.ath_date[currency])
    : undefined;

    const atlDate = currency && coinSummary?.market_data?.atl_date?.[currency]
    ? getConvertedDateCoinPage(coinSummary.market_data.atl_date[currency])
    : undefined;
    
    const { symbol } = currencyData.find(item => item.value === currency) || {};

    return (
        <StyledCoinSummary>
            <CoinPageCard $maxWidth='564px'>
                    <StyledCoinTitle>
                        <img src={coinSummary?.image?.small} alt='logo' />
                        <div>
                            <StyledCoinName>{coinSummary?.name}</StyledCoinName>
                            <StyledHomeLink href={coinSummary?.links?.homepage[0]}>{coinSummary?.links?.homepage[0]}</StyledHomeLink>
                        </div>
                    </StyledCoinTitle>
                    <StyledPrice>{symbol}{currency && coinSummary?.market_data?.ath?.[currency]}</StyledPrice>
                    <StyledTimeBlock>
                        <StyledTimeLine>
                            
                            <StyledTimeText>All time high:</StyledTimeText>
                            <StyledTimePrice>{symbol}{currency && coinSummary?.market_data?.high_24h?.[currency]}</StyledTimePrice>
                        </StyledTimeLine>
                        <StyledDate>{athDate}</StyledDate>
                    </StyledTimeBlock>
                    <StyledTimeBlock>
                        <StyledTimeLine>
                            <StyledTimeText>All time Low:</StyledTimeText>
                            <StyledTimePrice>{symbol}{currency && coinSummary?.market_data?.low_24h?.[currency]}</StyledTimePrice>
                        </StyledTimeLine>
                        <StyledDate>{atlDate}</StyledDate>
                    </StyledTimeBlock>
            </CoinPageCard>
        </StyledCoinSummary>
    )
 };