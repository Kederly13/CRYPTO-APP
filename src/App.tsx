import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from 'Layout';
import Home from './pages/Home/Home'
import CoinPage from 'pages/CoinPage/CoinPage';

import './App.scss';
import { ConvertorSection } from 'pages/Home/components/Convertor';
import { useEffect } from 'react';

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
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='convertor' element={<ConvertorSection />}/>
          </Route>
          <Route path='/coin-page/:id' element={<CoinPage/>} />
        </Routes>
      </Layout>
  </Router>
  )

};

export default App;
