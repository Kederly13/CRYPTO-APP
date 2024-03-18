import { useEffect } from 'react';
import { StyledStatistics, StyledStatisticsHead } from './StyledStatistics';

import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { ChartBox } from './components/ChartBox';
import { PeriodFilter } from 'components/PeriodFilter';

import { fetchCoins, selectCoinList } from 'store/slices/coinSlice';
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

    const coins = useAppSelector(selectCoinList);
    const coinsHistory = useAppSelector(selectCoinsHistory);

    const coinsHistoryKeys = Object.keys(coinsHistory);  
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;

    const coinFirst = coins.find(({ id }) => id === coinsHistoryFirst);
    // const coinSecond = coins.find(({ id }) => id === coinsHistorySecond);
    
    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.COIN]: coinsHistoryFirst,
                [SEARCH_PARAMS.DAYS]: '7'
            });
        };

        if (coins?.length) {
            return;
        };

        const controller = new AbortController();

        (async () => {
            const resCoins = await dispatch(fetchCoins(controller)).unwrap();

            onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.COIN]: resCoins[0]?.id,
                [SEARCH_PARAMS.DAYS]: '7'
            })
        })();

        return () => {
            controller.abort();
        }
    }, []);

    useEffect(() => {
        if (!objSearchParams?.coin && !objSearchParams?.days) {
            return;
        }

        const controller = new AbortController();

        const coinsArr = objSearchParams?.coin?.split(',');
        const newCoin = coinsArr[coinsArr.length - 1];

        const payload = {
            id: newCoin,
            days: objSearchParams.days
        };

        dispatch(fetchCoinHistory({ payload, controller: controller}))

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
                coinsDetails={coins}
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