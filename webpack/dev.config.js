const webpackConfig = require('./common.config.js');

webpackConfig.mode = 'development';
webpackConfig.devtool = 'inline-source-map';

module.exports = webpackConfig;