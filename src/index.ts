import express from 'express';
import { createConnection } from 'typeorm';
import { initAppConfig } from './config';
import { config } from 'dotenv';

async function startServer(): Promise<void> {
  config();
  const appConfig = initAppConfig();
  const app = express();
  app.use(express.json());
  await createConnection();

  app.listen(appConfig.PORT, () => {
    console.log('Server started at', appConfig.PORT);
  });
}

startServer();
