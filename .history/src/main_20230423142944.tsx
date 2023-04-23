import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import './index.css';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClientConfig}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
