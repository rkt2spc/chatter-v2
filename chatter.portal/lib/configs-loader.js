//========================================================================================================
// Node Dependencies
var path = require('path');
var fs = require('fs');

//========================================================================================================
// External Dependencies
var fsx = require('fs-extra');
var yaml = require('js-yaml');
var lodash = require('lodash');


//========================================================================================================
// Directories
const CONFIGS_DIR = path.resolve(__dirname, '..', 'configs');

//========================================================================================================
// Paths
const SERVER_SETTINGS_PATH = path.resolve(CONFIGS_DIR, 'server.settings.yaml');

//========================================================================================================
// Ensure files
fsx.ensureFileSync(SERVER_SETTINGS_PATH);

//========================================================================================================
// Server Settings
var serverSettings = yaml.safeLoad(fs.readFileSync(SERVER_SETTINGS_PATH, 'utf8')) || {};
['NODE_ENV', 'PORT'].forEach((name) => {
    if (process.env[name])
        serverSettings[name] = process.env[name];
    
    if (!serverSettings[name])
        throw new Error(`Server settings variable ${name} is missing`)
});

exports.loadServerSettings = () => serverSettings;
//========================================================================================================
// Others Settings