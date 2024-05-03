import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from 'Layout';
import Home from './pages/Home/Home'

import './App.scss';
import { ConvertorSection } from 'pages/Home/components/Convertor';
import { useEffect } from 'react';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useAppDispatch } from 'hooks/reduxHooks';
import { SEARCH_PARAMS } from 'constants/searchParams';
import { fetchCoins, setNulifyCoins } from 'store/slices/coinsSlice/coinSlice';
import { fetchCoinHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';
import { selectMarketData } from 'store/slices/marketData/marketDataSlice';
import { selectCoinsHistory } from 'store/slices/coinsHistory/coinsHistorySlice';
import { fetchMarketData } from 'store/slices/marketData/marketDataSlice';



const App = () => {
  const coinsList = useAppSelector(selectCoinList)
    const coinsHistory = useAppSelector(selectCoinsHistory);
    const marketData = useAppSelector(selectMarketData)
    const dispatch = useAppDispatch();

      useEffect(() => {
        if (coinsList.length && Object.values(coinsHistory).length) {
            return;
        }

        const controller = new AbortController();
        dispatch(fetchMarketData(controller));
        dispatch(fetchCoins(controller));
        dispatch(fetchCoinHistory(controller));
  
        return () => {
            controller.abort();
        };
  
    }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='convertor' element={<ConvertorSection />}/>
          </Route>
        </Routes>
      </Layout>
  </Router>
  )

};

export default App;
