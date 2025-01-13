import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';

const config: MikroOrmModuleOptions = {
  entities: ['./src/feature/**/*.entity.ts'],
  dbName: 'library',
  driver: SqliteDriver,
  debug: true,
};

export default config;
