import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { BookModel } from '../model/books.model';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Book implements BookModel {
  @ApiProperty()
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @ApiProperty()
  @Property()
  title: string;

  @ApiProperty()
  @Property()
  author: string;

  @ApiProperty()
  @Property()
  year: number;

  @ApiProperty()
  @Property()
  genre: string;

  @ApiProperty()
  @Property()
  editorial: string;
}
