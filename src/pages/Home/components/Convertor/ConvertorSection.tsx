import { useEffect } from 'react';

import { ICoin } from 'types/coinType';
import { SEARCH_PARAMS } from 'constants/searchParams'

import { fetchCoins, setNulifyCoins } from 'store/slices/coinsSlice/coinSlice';
import { fetchCoinHistory } from 'store/slices/coinsHistory/coinsHistorySlice';

import { useAppDispatch } from 'hooks/reduxHooks';
import { useAppSelector } from 'hooks/reduxHooks';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { selectCoinsHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { ConvertorWrapper } from './components/ConvertorWrapper/ConvertorWrapper';
import { StyledConvertorSection, StyledHeading, StyledDateTime } from './StyledConvertorSection';
import { getConvertedDates } from 'utils/getConvertedDates';
import { getDateTime } from 'utils/getDateTime';
import { ChartBox } from 'components/ChartBox';
import { LineChart } from 'components/LineChart';
import { PeriodFilter } from 'components/PeriodFilter';

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

interface ISelectedCoins {
    firstCoin: ICoin;
    secondCoin: ICoin;
};

export const ConvertorSection = () => {
    const dispatch = useAppDispatch();

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const coinsHistory = useAppSelector(selectCoinsHistory);
    const coinsHistoryKeys = Object.keys(coinsHistory);
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;
    console.log(coinsHistoryFirst, coinsHistorySecond)
    const currentDayTime = getDateTime();

    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                [SEARCH_PARAMS.COIN]: 'bitcoin,ethereum',
                [SEARCH_PARAMS.CURRENCY]: 'usd',
                [SEARCH_PARAMS.DAYS]: '7',
            });
        };
    }, [])

    useEffect(() => {
        if (!objSearchParams?.coin && !objSearchParams?.days && objSearchParams?.currency && coinsHistoryFirst && coinsHistorySecond) {
            return;
        };

        dispatch(setNulifyCoins());
        const controller = new AbortController();
        
        dispatch(fetchCoins(controller));
        dispatch(fetchCoinHistory(controller));
  
        return () => {
            controller.abort();
        };
  
    }, [objSearchParams?.days, objSearchParams?.currency, objSearchParams?.coin]);

    return (
        <StyledConvertorSection>
            <StyledHeading>
                Online currency convertor
            </StyledHeading>
            <StyledDateTime>
                {currentDayTime}
            </StyledDateTime>
            <ConvertorWrapper />
            <ChartBox headline={`${coinsHistoryFirst} to ${coinsHistorySecond}`} $maxWidth='100%'  $maxHeight='600px'>
                <LineChart
                    firstCoinData={coinsHistoryFirst ? getConvertedDates(coinsHistory[coinsHistoryFirst].prices): []}
                    coinFirst={coinsHistoryFirst}
                    secondCoinData={coinsHistorySecond ? getConvertedDates(coinsHistory[coinsHistorySecond].prices) : []}
                    coinSecond={coinsHistorySecond} 
                />  
            </ChartBox>
            <PeriodFilter />
        </StyledConvertorSection>
    )
};