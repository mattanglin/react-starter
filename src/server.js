import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import path from 'path';
import Html from './Html';
import App from './App';

function startServer(parameters) {
  const app = express();

  app.use(express.static(path.join(__dirname, '..', '/build/assets')));

  // TODO MIDDLEWARES!
  // TODO CREATE STORE!

  // React SSR
  app.use((req, res) => {
    const content = ReactDOM.renderToString(
      <Html
        assets={parameters.chunks()}
        component={<App />}
      />
    );

    return res.send(content);
  });

  // TODO ERROR HANDLING!

  // Run Server
  app.listen(3000, () => console.log('Server running on port 3000...'));
}

export default startServer;
