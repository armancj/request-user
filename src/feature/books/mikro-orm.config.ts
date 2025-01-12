import { Options } from '@mikro-orm/core';
import { SqliteDriver } from '@mikro-orm/sqlite';

const config: Options<SqliteDriver> = {

  dbName: 'libraryMikro.sqlite3',
  entities: ['./dist/feature/books/entity/*.js'],
  entitiesTs: ['./src/feature/books/entity/*.ts'],
  debug: true,
  migrations: {
    path: './migrations',
    pathTs: './src/migrations',
  },
  allowGlobalContext: true,
};

export default config;
