import { BookModel } from '../model/books.model';
import { ApiProperty } from '@nestjs/swagger';

export class Book implements BookModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  genre: string;

  @ApiProperty()
  editorial: string;
}
