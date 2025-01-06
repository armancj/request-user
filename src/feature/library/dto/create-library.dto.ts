import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateLibraryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @IsNotEmpty()
  publishedYear: number;
}
