import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { UserModel } from '../model/user.model';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User implements UserModel {
  @ApiProperty()
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @ApiProperty()
  @Property({ type: 'integer' })
  age: number;

  @ApiProperty()
  @Property({ type: 'string' })
  name: string;
}
