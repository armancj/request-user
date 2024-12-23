import { UserModel } from '../model/user.model';
import { ApiProperty } from '@nestjs/swagger';

export class User implements UserModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  edad: number;

  @ApiProperty()
  name: string;
}
