import { useEffect, useState } from 'react';

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
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';
import { getDateTime } from 'utils/getDateTime';

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

    useEffect(() => {
        if (Object.values(objSearchParams).length <= 1) {
            onSetObjSearchParams({
                [SEARCH_PARAMS.CURRENCY]: 'usd',
                [SEARCH_PARAMS.DAYS]: '7',
            });
        };
    }, [])

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
  
    }, [objSearchParams?.days, objSearchParams?.currency]);

    const currentDayTime = getDateTime();

    return (
        <StyledConvertorSection>
            <StyledHeading>
                Online currency convertor
            </StyledHeading>
            <StyledDateTime>
                {currentDayTime}
            </StyledDateTime>
            <ConvertorWrapper />
        </StyledConvertorSection>
    )
};