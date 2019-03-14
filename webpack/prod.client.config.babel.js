import webpack from 'webpack';
import { client } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from './prod.config';

const clientConfiguration = client(baseConfig, settings);

clientConfiguration.plugins.push(new webpack.DefinePlugin({
  __CLIENT__: true,
  __SERVER__: false,
  __DEVELOPMENT__: true,
  __DEVTOOLS__: true,
}));

export default clientConfiguration;
