import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Library {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  author!: string;

  @Property()
  publishedYear!: number;
}
