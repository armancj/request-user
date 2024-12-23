import { UserModel } from '../model/user.model';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDto implements Omit<UserModel, 'id'> {
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
