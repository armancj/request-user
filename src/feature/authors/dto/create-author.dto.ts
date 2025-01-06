import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  book: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  age: number;
}
