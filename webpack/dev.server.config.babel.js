import { server } from 'universal-webpack/config';
import settings from './universal-webpack-settings';
import baseConfig from './dev.config';

// Update file-loader settings to server initial rendered files at correct path
const host = process.env.DEV_HOST || 'http://localhost';
const port = process.env.DEV_PORT || 3030;

// Kind of gross. Would be nice to fix this...
// baseConfig.module.rules[1].use[0].options.publicPath = `${host}:${port}/assets/`;
baseConfig.output.publicPath = `${host}:${port}/assets/`;

export default server(baseConfig, settings);
