require('source-map-support/register');
var startServer = require('universal-webpack/server');
var settings = require('../webpack/universal-webpack-settings');
var config = require('../webpack/common.config');

// Set Globals
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

startServer(config, settings);
