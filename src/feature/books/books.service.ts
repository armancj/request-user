import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository, FindOptions } from '@mikro-orm/core';
import { Book } from './entity/books.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BookNotFoundException } from './exception/book-not-found.exception';
import { AuthorsService } from '../authors/authors.service';
import { Library } from '../library/entity/library.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookEntityRepository: EntityRepository<Book>,
    private readonly em: EntityManager,
    private readonly authorsService: AuthorsService,
  ) {}

  async create(createBookDto: CreateBook): Promise<Book> {
    const { authorId, ...bookDto } = createBookDto;

    const author = await this.findAuthor(authorId);

    const book = this.bookEntityRepository.create({
      ...bookDto,
      author,
    });

    await this.em.persistAndFlush(book);
    return book;
  }

  private async findAuthor(authorId: number) {
    return this.authorsService.getAuthorById(authorId);
  }

  async findAll(): Promise<Book[]> {
    return this.bookEntityRepository.findAll({ populate: ['libraries'] });
  }

  async findOne(id: number): Promise<Book> {
    const bookFound = await this.bookEntityRepository.findOne({ id }, { populate: ['libraries'] });
    if (!bookFound) throw new BookNotFoundException();
    return bookFound;
  }

  async update(id: number, updateBookDto: UpdateBook): Promise<boolean> {
    const { authorId, ...bookDto } = updateBookDto;

    const book: Partial<Book> = { ...bookDto };

    if (authorId) book.author = await this.findAuthor(authorId);

    const bookUpdateCount = await this.bookEntityRepository.nativeUpdate(
      { id },
      book,
    );
    if (bookUpdateCount === 0) throw new BookNotFoundException();
    return true;
  }

  async remove(id: number): Promise<{ message: string }> {
    const book = await this.findOne(id);
    await this.em.removeAndFlush(book);
    return { message: 'Book deleted successfully' };
  }
}