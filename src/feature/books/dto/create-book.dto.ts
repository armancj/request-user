import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBook {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsInt()
  @Min(1000)
  @Max(2000)
  year: number;

  @ApiProperty()
  @IsString()
  genre: string;
}
