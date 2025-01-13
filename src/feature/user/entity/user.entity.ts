import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { UserModel } from '../model/user.model';

@Entity()
export class User implements UserModel {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property({ type: 'integer' })
  age: number = 18;

  @Property({ type: 'string' })
  name: string = `mandi`;
}
