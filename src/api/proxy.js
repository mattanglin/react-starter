import { Router } from 'express';
import ServerClient from './ServerClient';

const createProxy = (config) => {
  const proxy = Router();

  proxy.use('/api/:api?', (req, res, next) => {
    const client = new ServerClient(config, req);

    client.proxyRequest()
      .then((result) => res.send(result.data))
      .catch((error) => {
        console.log('Proxy error:', error.message);
        return next(error);
      });
  });

  return proxy;
};

export default createProxy;
