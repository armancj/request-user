import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Book } from 'src/feature/books/entity/books.entity';

@Entity()
export class Library {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  author!: string;

  @Property()
  publishedYear!: number;

  @ManyToMany(() => Book, (book: Book) => book.libraries, { nullable: true })
  books: Collection<Book> = new Collection<Book>(this);

  
}