import { Module } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialController } from './editorial.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Editorial } from './entities/editorial.entity';
import { AuthorsModule } from '../authors/authors.module';
import { BooksModule } from '../books/books.module';

@Module({
  imports:[MikroOrmModule.forFeature([Editorial]),AuthorsModule ,BooksModule],
  controllers: [EditorialController],
  providers: [EditorialService],
})
export class EditorialModule {}
