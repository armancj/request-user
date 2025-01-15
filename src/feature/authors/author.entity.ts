import {
  Collection,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Book } from '../books/entity/books.entity';
import { User } from '../user/entity/user.entity';

@Entity()
export class Author {
  @PrimaryKey()
  id!: number;

  @Property({ nullable: true })
  bio?: string;

  @OneToOne(() => User, { owner: true })
  user!: User;

  @OneToMany(() => Book, (book: Book) => book.author, { orphanRemoval: true })
  books = Collection<Book>;
}
