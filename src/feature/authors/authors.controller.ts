import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() body: { name: string; bio: string }): Promise<Author> {
    return await this.authorsService.createAuthor(body.name, body.bio);
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
    @Body() body: { name: string; bio: string },
  ): Promise<Author | null> {
    return await this.authorsService.updateAuthor(id, body.name, body.bio);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.authorsService.deleteAuthor(id);
  }
}
