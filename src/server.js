import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import proxy from 'api/proxy';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import createStore from 'state/createStore';
import Html from './Html';
import App from './App';
import config from './config';
import ServerClient from './api/ServerClient';

// Render React App Markup for response
const renderApp = ({ assets, store }) => `<!doctype html>${ReactDOM.renderToString(
  <Html
    assets={assets}
    component={(
      <Provider key="provider" store={store}>
        <App />
      </Provider>
    )}
    store={store}
  />
)}`;

function startServer(parameters) {
  const app = express();

  app.use(morgan('tiny'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(compression());
  // This always refers to the build dir as that's where it's served from
  app.use('/assets', express.static(path.join(__dirname, '..', '/assets')));
  app.use(proxy(config.proxy));

  // React SSR
  app.use((req, res, next) => {
    try {
      const data = {};
      const client = new ServerClient(config.proxy, req);
      const { store, thunk } = createStore(data, client, [req.originalUrl]);
      const assets = parameters.chunks();
  
      // Router thunk and render
      thunk(store)
        .then(() => res.send(renderApp({ store, assets })))
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  });

  // ERROR HANDLING!
  app.use((err) => {
    console.log('HANDLING ERROR!!!!', err);
  });

  // Run Server
  app.listen(config.port, () => console.log(`Server listening at ${config.host} on port ${config.port}`));
}

export default startServer;
