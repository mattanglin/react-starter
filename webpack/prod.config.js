const webpackConfig = require('./common.config.js');

webpackConfig.mode = 'production';
webpackConfig.devtool = 'source-map';

module.exports = webpackConfig;