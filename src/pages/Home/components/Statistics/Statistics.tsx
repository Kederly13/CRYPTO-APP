import { useEffect } from 'react';
import { StyledStatistics, StyledStatisticsHead, StyledCharts } from './StyledStatistics';

import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from 'components/LineChart';
import { BarChart } from 'components/BarChart';
import { ChartBox } from 'components/ChartBox';
import { PeriodFilter } from 'components/PeriodFilter';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { selectCoinList, selectLastCoinList } from 'store/slices/coinsSlice/coinsSlice';
import { selectInit } from 'store/slices/initSlice/initSlice';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinsHistory } from 'store/slices/coinsSlice/coinsSlice';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';

import { getConvertedDates } from 'utils/getConvertedDates';
import { SEARCH_PARAMS } from 'constants/searchParams';

import 'swiper/swiper-bundle.css';

export type TCoinPrice = Array<Array<number>>;

export const Statistics = () => {
    const { fetchCoins, fetchCoinHistory } = useActions();

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const { coin, days, currency} = objSearchParams;

    const lastCoins = useAppSelector(selectLastCoinList);
    const coinsList = useAppSelector(selectCoinList)
    const coinsHistory = useAppSelector(selectCoinsHistory);
    console.log(coinsHistory)
    const init = useAppSelector(selectInit);

    const coinsHistoryKeys = Object.keys(coinsHistory);
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;

    const coinFirst = lastCoins.find(({ id }) => id === coinsHistoryFirst);

    const today = new Date();
    const todayString = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    const { symbol } = currencyData.find(item => item.value === currency) || {};
    
    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                [SEARCH_PARAMS.COIN]: objSearchParams.coin || 'bitcoin',
                [SEARCH_PARAMS.DAYS]: objSearchParams.days || '7',
                [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency || 'usd',
            });
        };
      }, []); // eslint-disable-line
      
      useEffect(() => {
        if (coin && days && currency && init) {
            const controller = new AbortController();

            if (!coinsList?.length) {
                fetchCoins(controller);
            }

            if (!Object.values(coinsHistory).length) {   
                fetchCoinHistory(controller);
            }

            return () => {
                controller.abort();
            }
        }
      }, [days, coin, currency, init]); // eslint-disable-line

    return (
        <StyledStatistics>
            <StyledStatisticsHead>
                <h2>
                    Select the currency to view statistics
                </h2>
                <Button type='button' $padding='12px 24px'>Exit comparison</Button>
            </StyledStatisticsHead>
            <CurrencySwiper
                coinsDetails={lastCoins}
            />
            <StyledCharts>
                <ChartBox 
                    headline={coinFirst ? `${coinFirst.name} (${coinFirst.symbol})` : ''} 
                    number={coinFirst ? symbol + String(coinFirst.current_price) : ''}
                >
                    <LineChart
                        firstCoinData={coinsHistoryFirst ? getConvertedDates(coinsHistory[coinsHistoryFirst].prices): []}
                        coinFirst={coinsHistoryFirst}
                        secondCoinData={coinsHistorySecond ? getConvertedDates(coinsHistory[coinsHistorySecond].prices) : []}
                        coinSecond={coinsHistorySecond} 
                    />
                </ChartBox>
                <ChartBox 
                    headline={'Volume'} 
                    number={todayString}
                >
                    <BarChart
                        firstCoinData={coinsHistoryFirst ? getConvertedDates(coinsHistory[coinsHistoryFirst].prices): []}
                        coinFirst={coinsHistoryFirst}
                        secondCoinData={coinsHistorySecond ? getConvertedDates(coinsHistory[coinsHistorySecond].prices) : []}
                        coinSecond={coinsHistorySecond}
                    />
                </ChartBox>
            </StyledCharts>
            <PeriodFilter />
        </StyledStatistics>
    );
};