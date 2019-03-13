import { server } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from './prod.config';

const config = server(baseConfig, settings);

config.target = 'node';
config.mode = 'development';

export default config;
