import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import store, {persistor} from './store'
// Redux Persist
import { PersistGate } from 'redux-persist/integration/react';
// Router
import {HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ScrollToTop from './components/RouterScrollToTop';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ScrollToTop />
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


