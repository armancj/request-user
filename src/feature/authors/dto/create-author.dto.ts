import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
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
}
