import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from './dev.config';

const clientConfiguration = client(baseConfig, settings);

// Add webpack-dev-server settings
clientConfiguration.devServer = {
  port: 3001,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};
clientConfiguration.output.publicPath = 'http://localhost:3001/assets/';

export default clientConfiguration;
