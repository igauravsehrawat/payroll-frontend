import React from 'react';
import ReactDOM from 'react-dom';
import './data/styles/index.scss';
import { AppContainer } from 'react-hot-loader';
import * as Sentry from '@sentry/browser';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_KEY });

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
render();

if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
