import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';

@ApiTags('Books')
@Controller('books')
export class BooksController {
   

   constructor(private booksService:BooksService){}
  @Get()
  getBooks() {
   return this.booksService.getBooks();
  }

  @Post()
  createBook(){
    return "Creando libros"
  }
  @Put()
  updateBook(){
    return "Actualizando libros"
  }
  @Delete()
  deleteBook(){
    return "Eliminando libros"
  }
}
