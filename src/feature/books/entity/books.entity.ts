import { BookModel } from "../model/books.model";
import { ApiProperty } from "@nestjs/swagger";

export class Book implements BookModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  date_post: number;
}