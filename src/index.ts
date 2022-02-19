import express from 'express';
import { createConnection } from 'typeorm';
import { initAppConfig } from './config';
import { config } from 'dotenv';
import mainRouter from './routes';

async function startServer(): Promise<void> {
  config();
  await createConnection();
  const appConfig = initAppConfig();

  const app = express();
  app.use(express.json());

  app.use(mainRouter);

  app.listen(appConfig.PORT, () => {
    console.log('Server started at', appConfig.PORT);
  });
}

startServer();
