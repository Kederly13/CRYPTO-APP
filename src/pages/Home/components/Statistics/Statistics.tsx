import { useEffect } from 'react';
import { StyledStatistics, StyledStatisticsHead } from './StyledStatistics';

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
    const coinsHistory = useAppSelector(selectCoinsHistory);
    
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
                currency: 'usd',
                page: '1',
            }
            
            const resCoins = await dispatch(fetchCoins({ payload, controller })).unwrap();
            console.log(resCoins)
            onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.COIN]: resCoins[0]?.id,
                [SEARCH_PARAMS.DAYS]: peiodFilterData[0].value,
                [SEARCH_PARAMS.CURRENCY]: objSearchParams.currency,
                [SEARCH_PARAMS.PAGE]: objSearchParams.page
            })
        })();

        return () => {
            controller.abort();
        }
    }, []);
    
    console.log(objSearchParams)
    useEffect(() => {
        if (!objSearchParams?.coin || !objSearchParams?.days) {
            return;
        }

        const controller = new AbortController();

        const ids = objSearchParams?.coin?.split(',')
        
        const payload = {
            ids,
            days: objSearchParams.days
        };

        dispatch(fetchCoinHistory({ payload, controller }))

        return () => {
            controller.abort();
        };

    }, [objSearchParams?.days, objSearchParams?.coin]);

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
            <div className='charts'>
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
            </div>
            <PeriodFilter />
        </StyledStatistics>
    );
};