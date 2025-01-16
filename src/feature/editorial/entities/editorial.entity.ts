import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Book } from '../../books/entity/books.entity';

@Entity()
export class Editorial {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToMany(() => Book, book => book.editorial, { nullable: true })
  books = new Collection<Book>(this);
}