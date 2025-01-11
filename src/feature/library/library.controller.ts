import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Library } from './library.entity';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  async findAll(): Promise<Library[]> {
    return this.libraryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Library | null> {
    return this.libraryService.findOne(Number(id));
  }

  @Post()
  async create(@Body() libraryData: Partial<Library>): Promise<Library> {
    return this.libraryService.create(libraryData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() libraryData: Partial<Library>): Promise<Library | null> {
    return this.libraryService.update(Number(id), libraryData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.libraryService.delete(Number(id));
  }
}
