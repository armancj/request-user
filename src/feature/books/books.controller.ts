import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  @Get()
  getAllBooks() {
    return 'Obtencion de todos los libros';
  }
}
