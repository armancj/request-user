import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity() //Marca la clase como una entidad de la base de datos. Esto significa que MikroORM la usará para crear y gestionar una tabla.
export class Author {
  @PrimaryKey()
  id!: number; 

  @Property()
  name!: string; 
  @Property()
  bio!: string; 
}
