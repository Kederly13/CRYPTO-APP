import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout } from 'Layout';
import Home from './pages/Home/Home'

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
