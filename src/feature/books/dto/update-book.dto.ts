import { PartialType } from '@nestjs/swagger';
import { CreateBook } from './create-book.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBook extends PartialType(CreateBook) {
    @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsNumber()
  year?: number;

  @IsOptional()
  @IsString()
  genre?: string;
}
