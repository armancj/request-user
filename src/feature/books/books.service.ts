import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Book } from './entity/books.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly em: EntityManager) {}

  async create(createBookDto: CreateBook): Promise<Book> {
    const book = this.em.create(Book, createBookDto);
    await this.em.persistAndFlush(book);
    return book;
  }

  async findAll(): Promise<Book[]> {
    return await this.em.find(Book, {});
  }

  async findOne(id: number): Promise<Book | null> {
    return await this.em.findOne(Book, { id });
  }

  async update(id: number, updateBookDto: UpdateBook): Promise<Book> {
    const book = await this.em.findOneOrFail(Book, { id });
    await this.findOne(id);
    await this.em.persistAndFlush(book);
    return book;
  }

  async remove(id: number): Promise<void> {
    const book = await this.em.findOneOrFail(Book, { id });
    await this.em.removeAndFlush(book);
  }
}
