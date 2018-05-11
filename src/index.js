/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore  from './store/configureStore';
import { Provider } from 'react-redux';
import App from './components/containers/App';
import './styles/styles.scss';
require('./favicon.ico');
const store = configureStore();

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/containers/App', () => {
    const NewApp = require('./components/containers/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NewApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
