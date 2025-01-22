import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';
import { Multer } from 'multer';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  async create(@Body() createBookDto: CreateBook) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateBookDto: UpdateBook) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.booksService.remove(id);
  }

  @Post(':id/upload-cover')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/covers',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadCover(@Param('id') id: number, @UploadedFile() file: Express.Multer.File): Promise<any> {
    return this.booksService.uploadCover(id, file.filename);
  }

  @Post(':id/upload-back-cover')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/back-covers',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadBackCover(@Param('id') id: number, @UploadedFile() file: Express.Multer.File) {
    return this.booksService.uploadBackCover(id, file.filename);
  }
}
