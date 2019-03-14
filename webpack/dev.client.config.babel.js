import webpack from 'webpack';
import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from './dev.config';

const clientConfiguration = client(baseConfig, settings);
const host = process.env.DEV_HOST || 'http://localhost';
const port = process.env.DEV_PORT || 3001;

// Add webpack-dev-server settings
clientConfiguration.devServer = {
  port,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

clientConfiguration.output.publicPath = `${host}:${port}/assets/`;
clientConfiguration.plugins.push(new webpack.DefinePlugin({
  __CLIENT__: true,
  __SERVER__: false,
  __DEVELOPMENT__: true,
  __DEVTOOLS__: true,
}));

export default clientConfiguration;
