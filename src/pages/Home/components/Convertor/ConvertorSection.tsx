import { useEffect } from 'react';

import { SEARCH_PARAMS } from 'constants/searchParams'

import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';
import { selectInit } from 'store/slices/initSlice/initSlice';
import { selectCoinsHistory } from 'store/slices/coinsSlice/coinsSlice';

import { StyledConvertorSection, StyledHeading, StyledDateTime } from './StyledConvertorSection';

import { useAppSelector } from 'hooks/reduxHooks';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { ChartBox } from 'components/ChartBox';
import { LineChart } from 'components/LineChart';
import { PeriodFilter } from 'components/PeriodFilter';
import { ConvertorWrapper } from './components/ConvertorWrapper/ConvertorWrapper';

import { getConvertedDates } from 'utils/getConvertedDates';
import { getDateTime } from 'utils/getDateTime';
import { useActions } from 'hooks/useActions';


export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

export const ConvertorSection = () => {
    const { fetchCoins, fetchCoinHistory } = useActions();

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const { coin, days, currency } = objSearchParams;

    const coinsHistory = useAppSelector(selectCoinsHistory);
    const coinsList = useAppSelector(selectCoinList);
    const init = useAppSelector(selectInit);

    const coinsHistoryKeys = Object.keys(coinsHistory);
    const [coinsHistoryFirst, coinsHistorySecond] = coinsHistoryKeys;

    const currentDayTime = getDateTime();

    const renderCoinsParamsDefault = () => {
        const coinsParamsArr = coin?.split(',');

        if (coinsParamsArr?.length && coinsParamsArr?.length === 2) {
            
            return coin;
        }

        if(coinsParamsArr?.length && coinsParamsArr?.length === 1) {
            const idRandom = coinsList?.filter(({ id }) => id !== coinsParamsArr[0])[0]?.id;

            coinsParamsArr.push(idRandom);
            
            return coinsParamsArr.join(',')
           
        }

        return 'bitcoin,binancecoin'
    }

    useEffect(() => {
        onSetObjSearchParams({
            [SEARCH_PARAMS.COIN]: renderCoinsParamsDefault(),
            [SEARCH_PARAMS.CURRENCY]: 'usd',
            [SEARCH_PARAMS.DAYS]: '7',
        });
    }, []) // eslint-disable-line

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
        };
        
      }, [days, coin, currency, init]); // eslint-disable-line

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