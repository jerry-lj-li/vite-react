import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import store from './redux/store';
import { queryClientConfig } from './helpers/queryClient';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClientConfig}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
