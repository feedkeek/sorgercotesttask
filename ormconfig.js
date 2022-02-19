// const { DB_CONFIG } = process.env;

const DB_CONFIG = JSON.parse(process.env.DB_CONFIG);

module.exports = {
  host: DB_CONFIG.dbHost,
  type: DB_CONFIG.dbDialect,
  port: parseInt(DB_CONFIG.dbPort, 10),
  username: DB_CONFIG.dbUser,
  password: DB_CONFIG.dbPassword,
  database: DB_CONFIG.dbName,
  entities: ['dist/src/entities/*.js', 'dist/src/entities/**/*.js'],
  cli: {
    migrationsDir: 'db/migrations',
  },
};
