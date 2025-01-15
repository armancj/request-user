import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './entity/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return await this.authorsService.createAuthor(createAuthorDto);
  }

  @Get()
  async findAll(): Promise<Author[]> {
    return await this.authorsService.getAllAuthors();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Author | null> {
    return await this.authorsService.getAuthorById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ): Promise<{ message: string }> {
    return await this.authorsService.updateAuthor(id, updateAuthorDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return await this.authorsService.deleteAuthor(id);
  }
}
