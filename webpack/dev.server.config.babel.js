import { server } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from './dev.config';

export default server(baseConfig, settings);
