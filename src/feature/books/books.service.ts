import { Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Book } from './entity/books.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BookNotFoundException } from './exception/book-not-found.exception';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookEntityRepository: EntityRepository<Book>,
    private readonly em: EntityManager,
  ) {}

  async create(createBookDto: CreateBook): Promise<Book> {
    const book = this.bookEntityRepository.create(createBookDto);
    await this.em.flush();
    return book;
  }

  async findAll(): Promise<Book[]> {
    return this.bookEntityRepository.findAll();
  }

  async findOne(id: number): Promise<Book> {
    const bookFound = await this.bookEntityRepository.findOne({ id });
    if (!bookFound) throw new BookNotFoundException();
    return bookFound;
  }

  async update(id: number, updateBookDto: UpdateBook): Promise<boolean> {
    const bookUpdateCount = await this.bookEntityRepository.nativeUpdate(
      { id },
      updateBookDto,
    );
    if (bookUpdateCount === 0) throw new BookNotFoundException();
    return true;
  }

  async remove(id: number): Promise<void> {
    const book = await this.findOne(id);
    await this.em.removeAndFlush(book);
  }
}
