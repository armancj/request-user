import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Book } from '../books/entity/books.entity';

@Entity()
export class Author {
  @PrimaryKey()
  id!: number;

  @Property({ nullable: true })
  bio?: string;

  @Property()
  userId: number;

  @OneToMany(() => Book, (book: Book) => book.id, { orphanRemoval: true })
  books = Collection<Book>;
}
