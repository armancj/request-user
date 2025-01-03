import { Module } from '@nestjs/common';
import { BooksModule } from './feature/books/books.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './feature/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule,BooksModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}