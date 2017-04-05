//========================================================================================================
// Node Dependencies
var path = require('path');

//========================================================================================================
// External Dependencies
var winston = require('winston');
var fsx = require('fs-extra');

//========================================================================================================
// Size Definitions
const SIZE_256MB = 268435456;

//========================================================================================================
// Files paths
const LOGS_DIR = path.resolve(__dirname, '..', 'log');
const WARN_LOG_PATH = path.resolve(LOGS_DIR, 'warn.log');
const ERROR_LOG_PATH = path.resolve(LOGS_DIR, 'error.log');

//========================================================================================================
// Ensure Files Exist
fsx.ensureFileSync(WARN_LOG_PATH);
fsx.ensureFileSync(ERROR_LOG_PATH);

//========================================================================================================
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({ level: 'info', colorize: true, prettyPrint: true }),
        // new winston.transports.File({ 
        //     level: 'warn', 
        //     name: 'warn-file-logger', 
        //     filename: WARN_LOG_PATH,
        //     colorize: true, 
        //     prettyPrint: true, 
        //     maxsize: SIZE_256MB,
        //     maxFiles: 4,
        //     zippedArchive: true
        // }),
        new winston.transports.File({ 
            level: 'error', 
            name: 'error-file-logger', 
            filename: ERROR_LOG_PATH, 
            colorize: true, 
            prettyPrint: true, 
            maxsize: SIZE_256MB,
            maxFiles: 4,
            zippedArchive: true
         })
    ]
});

//========================================================================================================
// Exports
module.exports = logger;