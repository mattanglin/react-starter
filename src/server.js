import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import express from 'express';
import path from 'path';
import createStore from 'state/createStore';
import Html from './Html';
import App from './App';

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

  // Static assets
  app.use(express.static(path.join(__dirname, '..', '/build/assets')));

  // TODO MIDDLEWARES!

  // React SSR
  app.use((req, res) => {
    const data = {};
    const { store, thunk } = createStore(data, [req.originalUrl]);
    const assets = parameters.chunks();

    // Router thunk and render
    thunk(store).then(() => (
      res.send(renderApp({ store, assets }))
    ));
  });

  // TODO ERROR HANDLING!

  // Run Server
  app.listen(3000, () => console.log('Server running on port 3000...'));
}

export default startServer;
