import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

@ApiTags('Books')
@Controller('books')
export class BooksController {
   booksService: BooksService;

   constructor(booksService:BooksService){
      this.booksService = booksService;
   }
  @Get()
  getAllBooks() {
    return this.booksService.getBooks();
  }
}
