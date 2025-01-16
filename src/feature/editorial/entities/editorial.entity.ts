import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Library } from '../../library/entity/library.entity';

@Entity()
export class Editorial {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToMany(() => Library, library => library.id)
  libraries = new Collection<Library>(this);
}