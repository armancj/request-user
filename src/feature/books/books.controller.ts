import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

import { Book } from './entity/books.entity';
import { BookModel } from './model/books.model';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { CreateBook } from './dto/create-book.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
   

   constructor(private booksService:BooksService){}
  @Get()
  getBooks() {
   return this.booksService.getBooks();
  }

  @Post()
  @ApiOkResponse({type:Book})
  createBook(@Body()books :CreateBook){
    
    return this.booksService.create(books);

  }
  @Put()
  updateBook(){
    return this.booksService.updatebooks();
  }
  @Patch()
  patchBook(){
    return this.booksService.updateBooksStatus();
  }
  
  @Delete()
  deleteBook(){
    return this.booksService.deletebooks();
  }
}
