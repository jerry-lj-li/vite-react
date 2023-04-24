import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 管理全局状态
import { QueryClientProvider } from 'react-query'; // 管理请求,可以实现请求、轮询、失败重试、无限加载等功能
import { ThemeProvider } from '@mui/material/styles'; // 主题
import ModalProvider from 'mui-modal-provider';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom'; // 路由
import { AliveScope } from 'react-activation'; // 像vue 一样实现keep-alive 缓存
import 'virtual:svg-icons-register';
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
              <AliveScope>
                <App />
              </AliveScope>
            </ModalProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
