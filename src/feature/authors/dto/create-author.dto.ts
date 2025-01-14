import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  bio?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @IsInt()
  userId: number = 1;

  @IsNumber({}, { each: true })
  @IsArray()
  @IsNotEmpty({ each: true })
  @Min(1, { each: true })
  @IsInt({ each: true })
  bookIds: number[];
}
