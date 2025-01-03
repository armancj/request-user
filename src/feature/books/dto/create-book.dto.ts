import { ApiProperty } from "@nestjs/swagger";
import { BookModel } from "../model/books.model";

export class CreateBook implements Omit<BookModel, 'id'> {
    @ApiProperty()
  
  title: string;
  author: string;
  year: number;
  genre: string;
}
