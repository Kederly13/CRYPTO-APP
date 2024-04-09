import { useEffect } from 'react';
import { StyledStatistics, StyledStatisticsHead, StyledCharts } from './StyledStatistics';

import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { ChartBox } from './components/ChartBox';
import { PeriodFilter } from 'components/PeriodFilter';
import { peiodFilterData } from 'components/PeriodFilter/periodFilterData';

import { fetchCoins, selectCoinList, selectLastCoinList } from 'store/slices/coinsSlice/coinSlice';
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
    console.log(lastCoins)
    console.log(coinsList)
    const coinsHistoryKeys = Object.keys(coinsHistory);
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;
    

    const coinFirst = lastCoins.find(({ id }) => id === coinsHistoryFirst);
    // const coinSecond = coins.find(({ id }) => id === coinsHistorySecond);
    
    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.COIN]: coinsHistoryFirst,
                [SEARCH_PARAMS.DAYS]: '7',
                [SEARCH_PARAMS.CURRENCY]: 'usd',
                [SEARCH_PARAMS.PAGE]: '1'
            });
        };

        if (lastCoins?.length) {
            return;
        };

        const controller = new AbortController();

        (async () => {
            const payload = {
                currency: 'gbp',
                page: '1',
            }
            
            const resCoins = await dispatch(fetchCoins({ payload, controller })).unwrap();
            
            onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.COIN]: resCoins[0]?.id,
                [SEARCH_PARAMS.DAYS]: peiodFilterData[0].value,
                [SEARCH_PARAMS.CURRENCY]: payload.currency,
                [SEARCH_PARAMS.PAGE]: payload.page
            })
        })();

        return () => {
            controller.abort();
        }
    }, []);
    
    useEffect(() => {
        if (!objSearchParams?.coin && !objSearchParams?.days && objSearchParams?.currency) {
            return;
        };
        console.log("useEffect works")
        const controller = new AbortController();

        const ids = objSearchParams?.coin?.split(',');
        
        const coinsHistoryPayload = {
            ids,
            days: objSearchParams.days,
            currency: objSearchParams.currency
        };

        const coinsPayload = {
            currency: objSearchParams.currency,
            page: objSearchParams.page
        };

        dispatch(fetchCoinHistory({ coinsHistoryPayload, controller }));
        // dispatch(fetchCoins({ payload: coinsPayload, controller}))

        return () => {
            controller.abort();
        };

    }, [objSearchParams?.days, objSearchParams?.coin, objSearchParams.currency]);

    // console.log(lastCoins)
    return (
        <StyledStatistics>
            <StyledStatisticsHead>
                <h2>
                    Select the currency to view statistics
                </h2>
                <Button disabled={true} type='button' $padding='12px 24px'>Exit comparison</Button>
            </StyledStatisticsHead>
            <CurrencySwiper
                coinsDetails={lastCoins}
            />
            <StyledCharts>
                <ChartBox 
                    headline={coinFirst ? `${coinFirst.name} (${coinFirst.symbol})` : ''} 
                    number={coinFirst ? coinFirst.current_price : 0}
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
                    number={coinFirst ? coinFirst.current_price : 0}
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