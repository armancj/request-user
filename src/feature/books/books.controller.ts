import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './entity/books.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOkResponse({ type: [Book] })
  getBooks() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Book })
  getBook(@Param('id') id: number) {
    return this.booksService.findOne(+id);
  }

  @Post()
  @ApiOkResponse({ type: Book })
  createBook(@Body() createBook: CreateBook) {
    return this.booksService.create(createBook);
  }

  @Put(':id')
  @ApiOkResponse({ type: Book })
  updateBook(@Param('id') id: number, @Body() updateBook: UpdateBook) {
    return this.booksService.update(+id, updateBook);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Book })
  partialUpdateBook(@Param('id') id: number, @Body() updateBook: UpdateBook) {
    return this.booksService.update(+id, updateBook);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: number) {
    this.booksService.remove(+id);
  }
}
