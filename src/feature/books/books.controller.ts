 import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BooksModule } from './books.module';

 @ApiTags('Books')

 @Controller('books') 
export class BooksController {
   @Get('/books')
    getAllBooks(){
        return 'Obtencion de todos los libros'
   } 
}
