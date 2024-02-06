import React from 'react';
import { Provider } from 'react-dedux';
import ReactDOM from 'react-dom/client';
import store from './store';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

