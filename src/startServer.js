require('source-map-support/register');
var startServer = require('universal-webpack/server');
var settings = require('../webpack/universal-webpack-settings');
var config = require('../webpack/dev.config');

// Set Globals
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

startServer(config, settings);
