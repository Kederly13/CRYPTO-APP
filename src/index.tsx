import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { Theme } from "Theme/Theme";
import { ThemeContextProvider } from "ContextProvider/ContextProvider";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContextProvider>
        <Theme>
          <App />
        </Theme>
      </ThemeContextProvider>
    </PersistGate>
  </Provider>
);

