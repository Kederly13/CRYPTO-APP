import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from 'components/Button';

import { Layout } from 'Layout';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Button
          type='button'
          disabled
        >
          Coins
        </Button>
        <Router>
          <Routes>
            <Route path='/' element={null} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
