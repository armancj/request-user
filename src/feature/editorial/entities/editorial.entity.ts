import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Book } from '../../books/entity/books.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Editorial {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property()
  name!: string;

  @ManyToMany(() => Book, null, { nullable: true })
  books = new Collection<Book>(this);
}