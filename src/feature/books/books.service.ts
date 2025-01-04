import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entity/books.entity';
import { CreateBook } from './dto/create-book.dto';
import { UpdateBook } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  create(createBook: CreateBook): Book {
    const newBook = {
      id: this.books.length + 1,
      ...createBook,
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find((book) => book.id === id);
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);
    return book;
  }

  update(id: number, updateBook: UpdateBook): Book {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new NotFoundException(`Book with ID ${id} not found`);

    const updatedBook = { ...this.books[bookIndex], ...updateBook };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  remove(id: number): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) throw new NotFoundException(`Book with ID ${id} not found`);
    this.books.splice(bookIndex, 1);
  }
}
