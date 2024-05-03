import { Header } from './components/Header';
import { useEffect } from 'react';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useAppDispatch } from 'hooks/reduxHooks';
import { SEARCH_PARAMS } from 'constants/searchParams';
import { fetchCoins, setNulifyCoins } from 'store/slices/coinsSlice/coinSlice';
import { fetchCoinHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';
import { selectCoinsHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { fetchMarketData, selectMarketData } from 'store/slices/marketData/marketDataSlice';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC <LayoutProps> = ({ children }) => {
    

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )

};