import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = Component => ReactDOM.hydrate(
  <Component />,
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
