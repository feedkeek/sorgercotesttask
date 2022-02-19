export function initAppConfig(): any {
  const dbConfig = JSON.parse(process.env.DB_CONFIG);
  return Object.freeze({
    PORT: parseInt(process.env.PORT),
    DB_CONFIG: {
      type: dbConfig.dbDialect,
      host: dbConfig.dbHost,
      port: dbConfig.dbPort,
      name: dbConfig.dbName,
      user: dbConfig.dbUser,
      password: dbConfig.dbPassword,
    },
  });
}
