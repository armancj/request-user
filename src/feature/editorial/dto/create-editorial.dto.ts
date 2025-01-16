import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEditorialDto {

  @IsString()
  @IsNotEmpty()
  id: number;

  
  @IsString()
  @IsNotEmpty()
  name: string;
}