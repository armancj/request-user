import { UserModel } from '../user.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDto implements UserModel {
  @ApiProperty()
  @IsNumber()
  @Min(18)
  @Max(70)
  edad: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
