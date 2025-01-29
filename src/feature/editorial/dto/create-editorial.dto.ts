import { IsString, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateEditorialDto {

  
  @IsString()
  @IsNotEmpty()
  name: string;
}