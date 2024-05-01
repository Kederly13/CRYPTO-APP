import { Header } from './components/Header';
import { useEffect } from 'react';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useAppDispatch } from 'hooks/reduxHooks';
import { SEARCH_PARAMS } from 'constants/searchParams';
import { fetchCoins, setNulifyCoins } from 'store/slices/coinsSlice/coinSlice';
import { fetchCoinHistory } from 'store/slices/coinsHistory/coinsHistorySlice';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC <LayoutProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    // useEffect(() => {
    //     if (Object.values(objSearchParams).length <= 1) {
    //         onSetObjSearchParams({
    //             [SEARCH_PARAMS.COIN]: 'bitcoin',
    //             [SEARCH_PARAMS.DAYS]: '7',
    //             [SEARCH_PARAMS.CURRENCY]: 'usd',
    //         });
    //     };
    //   }, []);

    //   useEffect(() => {
    //     if (!objSearchParams?.coin && !objSearchParams?.days && objSearchParams?.currency) {
    //         return;
    //     };
    //     // dispatch(setNulifyCoins());
    //     const controller = new AbortController();
        
    //     dispatch(fetchCoins(controller));
    //     dispatch(fetchCoinHistory(controller));
  
    //     return () => {
    //         controller.abort();
    //     };
  
    // }, [dispatch]);


    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )

};