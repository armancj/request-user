import {
  Entity,
  PrimaryKey,
  Property,
  BeforeCreate,
  BeforeDelete,
  BeforeUpdate,
} from '@mikro-orm/core';
import { BookModel } from '../model/books.model';
import { Exclude } from 'class-transformer';

@Entity()
export class Book implements BookModel {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property({ type: 'string' })
  title: string;

  @Property()
  author: string;

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
