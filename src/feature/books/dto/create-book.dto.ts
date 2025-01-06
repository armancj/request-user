import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max, IsNotEmpty, IsEnum } from 'class-validator';
import { BookModel } from '../model/books.model';
import { GenreEnum } from '../enum/genre.enum';

export class CreateBook implements Omit<BookModel, 'id'> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({ default: 1000 })
  @IsInt()
  @Min(1000)
  @Max(2000)
  year: number;

  @ApiProperty({ default: GenreEnum.action })
  @IsString()
  @IsNotEmpty()
  @IsEnum(GenreEnum)
  genre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  editorial: string;
}
