import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.tsx';
import { store } from './context/store.ts';
import { ToastProvider } from './components/UI/index.tsx';

import './scss/styles.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider />
    <BrowserRouter>
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
