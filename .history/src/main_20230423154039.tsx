import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import ModalProvider from 'mui-modal-provider';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './redux/store';
import { queryClientConfig } from './helpers/queryClient';
import theme from './helpers/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClientConfig}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <ModalProvider>
              <App />
            </ModalProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
