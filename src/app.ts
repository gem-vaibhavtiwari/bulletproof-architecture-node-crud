import 'reflect-metadata'; // We need this in order to use @Decorators

import config from './config';

import express from 'express';

import Logger from './loaders/logger';
import expressListEndpoints from 'express-list-endpoints';

async function startServer() {
  const app = express();
  await require('./loaders').default({ expressApp: app });
  console.log("Registered Routes:", expressListEndpoints(app));

  app.listen(config.port, () => {
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  }).on('error', err => {
    Logger.error(err);
    process.exit(1);
  });

}

startServer();
