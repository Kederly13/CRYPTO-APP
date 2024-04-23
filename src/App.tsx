import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from 'Layout';
import Home from './pages/Home/Home'

import './App.scss';
import { Convertor } from 'pages/Home/components/Convertor';

// Внутри роута будет еще один роут (аутлет)
const App = () => (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='convertor' element={<Convertor />}/>
          </Route>
        </Routes>
      </Layout>
    </Router>
);

export default App;
