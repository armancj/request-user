import { UserModel } from '../user.model';
import { ApiProperty } from '@nestjs/swagger';

export class User implements UserModel {
  @ApiProperty()
  edad: number;

  @ApiProperty()
  name: string;
}