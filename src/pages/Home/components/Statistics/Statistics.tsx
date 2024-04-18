import { useEffect } from 'react';
import { StyledStatistics, StyledStatisticsHead, StyledCharts } from './StyledStatistics';

import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { ChartBox } from './components/ChartBox';
import { PeriodFilter } from 'components/PeriodFilter';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { fetchCoins, selectCoinList, selectLastCoinList, selectPage, setNulifyCoins } from 'store/slices/coinsSlice/coinSlice';
import { fetchCoinHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { selectCoinsHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { getConvertedDates } from 'utils/getConvertedDates';
import { SEARCH_PARAMS } from 'constants/searchParams';

import 'swiper/swiper-bundle.css';

export type TCoinPrice = Array<Array<number>>;

export const Statistics = () => {
    const dispatch = useAppDispatch();

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const lastCoins = useAppSelector(selectLastCoinList);
    const coinsList = useAppSelector(selectCoinList)
    const coinsHistory = useAppSelector(selectCoinsHistory);

    const coinsHistoryKeys = Object.keys(coinsHistory);
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;
    
    const coinFirst = lastCoins.find(({ id }) => id === coinsHistoryFirst);

    const today = new Date();
    const todayString = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    
    const { currency } = objSearchParams;
    const { symbol } = currencyData.find(item => item.value === currency) || {};

    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.COIN]: coinsHistoryFirst,
                [SEARCH_PARAMS.DAYS]: '7',
                [SEARCH_PARAMS.CURRENCY]: 'usd',
            });
        };
    })
    
    useEffect(() => {
        if (!objSearchParams?.coin && !objSearchParams?.days && objSearchParams?.currency) {
            return;
        };
        dispatch(setNulifyCoins());
        const controller = new AbortController();
        
        dispatch(fetchCoins(controller));
        dispatch(fetchCoinHistory(controller));

        return () => {
            controller.abort();
        };

    }, [dispatch, objSearchParams?.days, objSearchParams?.coin, objSearchParams.currency]);

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