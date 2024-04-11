import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider as ThemeProviderSC } from "styled-components";

import { Theme } from "Theme/Theme";
import { ThemeContextProvider } from "ThemeContextProvider/ThemeContextProvider";
import { ThemeProvider } from "providers/ThemeProviders";

import { useTheme } from "hooks/useTheme";

import './index.css';
import App from './App';
import { THEME } from "constants/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { theme } = useTheme();

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProviderSC theme={theme}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ThemeProviderSC>
    </PersistGate>
  </Provider>
);

