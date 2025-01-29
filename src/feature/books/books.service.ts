import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository, FindOneOptions, LoadHint, Populate } from '@mikro-orm/core';
import { Book } from './entity/books.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BookNotFoundException } from './exception/book-not-found.exception';
import { AuthorsService } from '../authors/authors.service';
import { Library } from '../library/entity/library.entity';
import { Editorial } from '../editorial/entities/editorial.entity';
import { EditorialService } from '../editorial/editorial.service';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookEntityRepository: EntityRepository<Book>,
    private readonly em: EntityManager,
    private readonly authorsService: AuthorsService,
    private readonly editorialService: EditorialService,
  ) {}

  async create(createBookDto: CreateBook): Promise<Book> {
    const { authorId, editorialNames, ...bookDto } = createBookDto;

    const author = await this.findAuthor(authorId);
    const editorials = await this.findEditorialsByName(editorialNames);

    const book = this.bookEntityRepository.create({
      ...bookDto,
      author,
      editorials,
    });

    await this.em.persistAndFlush(book);
    return book;
  }

  private async findAuthor(authorId: number) {
    return this.authorsService.getAuthorById(authorId);
  }

  private async findEditorialsByName(editorialName: number) {
    return this.editorialService.getEditorialById(editorialName);
  }

  async findAll(): Promise<Book[]> {
    return this.bookEntityRepository.findAll({ populate: ['libraries', 'editorials'] });
  }

  async findOne(id: number): Promise<Book> {
    const populate : Populate<Book>= [ 'libraries', 'editorials'] as never;
    const bookFound = await this.bookEntityRepository.findOne({ id }, {populate });
    if (!bookFound) throw new BookNotFoundException();
    return bookFound;
  }

  async update(id: number, updateBookDto: UpdateBook): Promise<boolean> {
    const { authorId, editorialNames, ...bookDto } = updateBookDto;

    const book: Partial<Book> = { ...bookDto };

    if (authorId) book.author = await this.findAuthor(authorId);
    if (editorialNames) book.editorials= await this.findEditorialsByName(editorialNames as unknown as number);

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