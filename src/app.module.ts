import { Module } from '@nestjs/common';
import { BooksModule } from './feature/books/books.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './feature/user/user.module';
import { LibraryModule } from './feature/library/library.module';
import { AuthorsModule } from './feature/authors/authors.module';
import { EditorialModule } from './feature/editorial/editorial.module';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entitiesTs: ['./src/feature/**/*.entity.ts'],
      dbName: 'library.sqlite3',
      driver: SqliteDriver,
      autoLoadEntities: true,
      debug: false,
    }),
    ConfigModule.forRoot(),
    UserModule,
    BooksModule,
    LibraryModule,
    AuthorsModule,
    EditorialModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}