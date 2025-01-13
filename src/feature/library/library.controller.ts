import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { LibraryService } from './library.service';
import { Library } from './entity/library.entity';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundLibraryExceptionDto } from './dto/not-found-library-exception.dto';

@ApiTags('Libraries')
@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  async findAll(): Promise<Library[]> {
    return this.libraryService.findAll();
  }

  @ApiNotFoundResponse({
    description: 'library not found',
    type: NotFoundLibraryExceptionDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Library | null> {
    return this.libraryService.findOne(Number(id));
  }

  @Post()
  async create(@Body() libraryData: CreateLibraryDto): Promise<Library> {
    return this.libraryService.create(libraryData);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() libraryData: UpdateLibraryDto,
  ): Promise<Library | null> {
    return this.libraryService.update(Number(id), libraryData);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.libraryService.delete(Number(id));
  }
}
