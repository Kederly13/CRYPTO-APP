import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from 'Layout';
import Home from './pages/Home/Home'

import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  </div>
);

export default App;
