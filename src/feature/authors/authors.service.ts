import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Author } from './author.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { BooksService } from '../books/books.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: EntityRepository<Author>,
    private readonly em: EntityManager,
    private readonly booksService: BooksService,
    private readonly userService: UserService,
  ) {}

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { userId, bookIds } = createAuthorDto;

    if (!bookIds.length) throw new BadRequestException('user is not author');

    await this.userService.findOne(userId);
    const author = this.authorRepository.create(createAuthorDto);

    await this.em.persistAndFlush(author);
    return author;
  }

  async getAllAuthors(): Promise<Author[]> {
    return await this.authorRepository.findAll();
  }

  async getAuthorById(id: number): Promise<Author | null> {
    return await this.authorRepository.findOne({ id });
  }

  async updateAuthor(
    id: number,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<{ message: string }> {
    const author = await this.authorRepository.nativeUpdate(
      { id },
      updateAuthorDto,
    );
    if (author === 0)
      throw new HttpException('author is not found', HttpStatus.NOT_FOUND);
    return { message: 'the author is modify' };
  }

  async deleteAuthor(id: number): Promise<{ message: string }> {
    const author = await this.authorRepository.nativeDelete({ id });
    if (author === 0)
      throw new HttpException('author is not found', HttpStatus.NOT_FOUND);
    return { message: 'the author is delete' };
  }
}
