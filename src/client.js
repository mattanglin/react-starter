import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'state/createStore';
import ApiClient from 'api/ApiClient';
import App from './App';

// Create store
const client = new ApiClient();
const { store } = createStore(window.__data, client);


const render = (Component) => ReactDOM.hydrate(
  <Provider key="provider" store={store}>
    <Component />
  </Provider>,
  document.getElementById('app')
);

render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    // eslint-disable-next-line
    const NextApp = require('./App.js');

    render(NextApp);
  });
}
