var startServer = require('universal-webpack/server');
var settings = require('../webpack/universal-webpack-settings');
var config = require('../webpack/dev.config');

startServer(config, settings);
