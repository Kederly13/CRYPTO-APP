import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from "providers/ThemeProvider";

import { GlobalStyle } from "styles/globalStyled";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <App />
          <GlobalStyle />
        </ThemeProvider>
    </PersistGate>
  </Provider>
);

