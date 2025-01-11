import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleOptions = {
  entities: ['./src/feature/library/library.entity.ts'],
  entitiesTs: ['./src/feature/library/library.entity.ts'], 
  dbName: 'libraryMikro',
  driver: require('@mikro-orm/sqlite').SqliteDriver, 
  debug: true,
};

export default config;