import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';


import { Layout } from 'Layout';
import Home from './pages/Home/Home'
import CoinPage from 'pages/CoinPage/CoinPage';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';

import { ConvertorSection } from 'pages/Home/components/Convertor';


import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { useActions } from 'hooks/useActions';

const App = () => {
  const { fetchInit } = useActions();

  useEffect(() => {
    const controller = new AbortController();

    fetchInit(controller)

    return () => {
      controller.abort();
    };

  }, []);
  
  return (
    <>
      <ToastContainer/>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />}>
                <Route path='convertor' element={<ConvertorSection />}/>
              </Route>
              <Route path='/coin-page/:id' element={<CoinPage/>} />
              <Route path='/portfolio' element={<PortfolioPage/>} />
            </Routes>
          </Layout>
      </Router>
    </>
  )
};

export default App;
