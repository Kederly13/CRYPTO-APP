import { FC } from 'react';

import { selectCoinSummary, selectCoinSummaryError, selectCoinSummaryLoading } from 'store/slices/coinsSlice/coinsSlice'
import { CoinPageCard } from 'pages/CoinPage/components/CoinPageCard';

import { ICoinPageProps } from '../../types';

import { useAppSelector } from 'hooks/reduxHooks';
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

import {ReactComponent as ArrowUp} from 'assets/svg/arrowUp.svg';
import {ReactComponent as ArrowDown} from 'assets/svg/arrowDown.svg';

 export const CoinSummary: FC<ICoinPageProps> = ({ coinSummary }) => {
    const athDate = coinSummary?.market_data?.ath_date?.usd && getConvertedDateCoinPage(coinSummary?.market_data?.ath_date?.usd);
    const atlDate = coinSummary?.market_data?.atl_date?.usd && getConvertedDateCoinPage(coinSummary?.market_data?.atl_date?.usd);

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
                    <StyledPrice>{coinSummary?.market_data?.ath?.usd}</StyledPrice>
                    <StyledTimeBlock>
                        <StyledTimeLine>
                            {/* <ArrowUp /> */}
                            <StyledTimeText>All time high:</StyledTimeText>
                            <StyledTimePrice>{coinSummary?.market_data?.high_24h?.usd}</StyledTimePrice>
                        </StyledTimeLine>
                        <StyledDate>{athDate}</StyledDate>
                    </StyledTimeBlock>
                    <StyledTimeBlock>
                        <StyledTimeLine>
                            {/* <ArrowUp /> */}
                            <StyledTimeText>All time Low:</StyledTimeText>
                            <StyledTimePrice>{coinSummary?.market_data?.low_24h?.usd}</StyledTimePrice>
                        </StyledTimeLine>
                        <StyledDate>{atlDate}</StyledDate>
                    </StyledTimeBlock>
            </CoinPageCard>
        </StyledCoinSummary>
    )
 }