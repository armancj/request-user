import { Module } from '@nestjs/common';
import { BooksModule } from './feature/books/books.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './feature/user/user.module';
import { LibraryModule } from './feature/library/library.module';
import { AuthorsModule } from './feature/authors/authors.module';
import { EditorialModule } from './feature/editorial/editorial.module';


@Module({
  imports: [
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
