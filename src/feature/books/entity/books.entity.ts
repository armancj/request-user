import {
  Entity,
  PrimaryKey,
  Property,
  BeforeCreate,
  BeforeDelete,
  BeforeUpdate,
  ManyToOne,
} from '@mikro-orm/core';
import { BookModel } from '../model/books.model';
import { Exclude } from 'class-transformer';
import { Author } from '../../authors/entity/author.entity';

@Entity()
export class Book implements BookModel {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property({ type: 'string' })
  title: string;

  @ManyToOne(() => Author)
  author: Author;

  @Property()
  year: number;

  @Property()
  @Exclude()
  genre: string;

  @Property()
  editorial: string;

  @BeforeCreate()
  @BeforeDelete()
  @BeforeUpdate()
  getNowYear() {
    this.year = new Date().getFullYear();
  }
}
