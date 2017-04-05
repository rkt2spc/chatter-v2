//========================================================================================================
// Node Dependencies
var path = require('path');
var http = require('http');

//========================================================================================================
// External Dependencies
var morgan = require('morgan');
var express = require('express');

//========================================================================================================
// Lib Dependencies
var logger = require('./lib/logger');
var configsLoader = require('./lib/configs-loader');

//========================================================================================================
// Configurations
var serverSettings = configsLoader.loadServerSettings();

//========================================================================================================
// Express App
var app = express();
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use((err, req, res, next) => logger.error(err));

//========================================================================================================
// Http Server
var httpServer = http.createServer(app);
httpServer
    .listen(serverSettings.PORT)
    .once('error', (e) => logger.error('Error starting server:', e))
    .once('listening', () => {
        logger.info('Server is listening on', serverSettings.PORT);
    });