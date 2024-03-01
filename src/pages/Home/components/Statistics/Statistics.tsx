import { useEffect, useState } from 'react';
import { StyledStatistics } from './StyledStatistics';

import { CurrencySwiper } from './components/CurrencySwiper';
import { Button } from 'components/Button';
import { LineChart } from './components/LineChart';
import { BarChart } from './components/BarChart';
import { ChartBox } from './components/ChartBox';
import { PeriodFilter } from 'components/PeriodFilter';

import { fetchCoins } from 'store/slices/coinSlice';
import { fetchCoinHistory } from 'store/slices/coinsHistorySlice';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useAllSelectedSearchParams } from 'hooks/useSelectedSearchParams';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useMultipleSelectedSearchParams } from 'hooks/useSelectedSearchParams';

import { getConvertedDates } from 'utils/getConvertedDates';

import 'swiper/swiper-bundle.css';

export type TCoinPrice = Array<Array<number>>;

export const Statistics = () => {
    const dispatch = useAppDispatch();

    const { coin, days } = useAllSelectedSearchParams();

    const coins = useAppSelector(state => state.coins.coinList);
    const coinsHistory = useAppSelector(state => state.coinsHistory.coinsHistory);

    const coinsHistoryKeys = Object.keys(coinsHistory)
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;

    const coinFirst = coins.find(({ id }) => id === coinsHistoryFirst);
    const coinSecond = coins.find(({ id }) => id === coinsHistorySecond);
    useSelectedObjSearchParams();
    
    useEffect(() => {
        (async () => {       
            if (coins.length && coinsHistoryKeys.length) {
                coin.onSelectedMultipleValue(coinsHistoryFirst);
                return;
            };

            const res = await dispatch(fetchCoins()).unwrap();
            coin.onSelectedMultipleValue(res[0].id);

            dispatch(fetchCoinHistory({ id: res[0].id, days: '7' }));
        })()
    }, []);


    useEffect(() => {
        if (coin.selectedValue?.length && coin.selectedValue.length > 1) {
            if (coinsHistoryKeys.length) {
                const newCoin = coin.selectedValue.find((id) => !coinsHistoryKeys?.includes(id));
                
                newCoin && dispatch(fetchCoinHistory({ id: newCoin, days: '7' }))
            }
        }
    }, [coin.selectedValue?.length]);

    return (
        <StyledStatistics>
            <h2>
                Select the currency to view statistics
                <Button disabled={true} type='button' padding='12px 24px'>Exit comparison</Button>
            </h2>
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