var path = require('path');

module.exports = {
  /***********************************************************
  * Applications                                             *                 
  ************************************************************/
  apps: [
    // chatter-gateway
    //------------------------------------
    {
      name: 'WEB',
      script: 'web.js'
    },
    // chatter-portal
    //------------------------------------
    {
      name: 'chatter.portal',
      script: path.resolve(__dirname, 'chatter.portal', 'server.js'),
      
      env: { NODE_ENV: 'DEVELOPMENT', PORT: 1337 },
      env_production: { NODE_ENV: 'PRODUCTION', PORT: 80 },

      watch: ['chatter.portal'],
      ignore_watch: ['chatter.portal/node_modules', 'chatter.portal/log'],
      
      exec_mode: 'cluster',
      instance: 0,
    },
  ],

  /***********************************************************
  * Deployment                                               *                 
  ************************************************************/
  // deploy: {
  //   production: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/production',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
  //   },
  //   staging: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/development',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
  //     env: {
  //       NODE_ENV: 'dev'
  //     }
  //   }
  // }
};
