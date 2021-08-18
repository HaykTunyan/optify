import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import * as serviceWorker from './serviceWorker';
import Provider from './store/config';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'store/config';
import ErrorBoundary from 'components/_ErrorBoundary';
import { Toast } from 'style-guide';
import { date } from 'utils';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';
// import i18n (needs to be bundled ;))
import './localization';
import { HelmetProvider } from 'react-helmet-async';

// moment locales
date.importLocales();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <PersistGate persistor={persistor}>
          <ErrorBoundary>
            <App />
            <Toast.Provider />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
