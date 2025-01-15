import {
  IsString,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { BookModel } from '../model/books.model';
import { GenreEnum } from '../enum/genre.enum';

export class CreateBook implements Omit<BookModel, 'id' | 'author'> {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Max(2000)
  @Min(1000)
  year: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(GenreEnum)
  genre: string = GenreEnum.action;

  @IsNotEmpty()
  @IsString()
  editorial: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @IsInt()
  authorId: number;
}
