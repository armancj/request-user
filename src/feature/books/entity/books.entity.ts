import {
  Entity,
  PrimaryKey,
  Property,
  BeforeCreate,
  BeforeDelete,
  BeforeUpdate,
  ManyToOne,
  ManyToMany,
  Collection,
} from '@mikro-orm/core';
import { BookModel } from '../model/books.model';
import { Exclude } from 'class-transformer';
import { Author } from '../../authors/entity/author.entity';
import { Library } from 'src/feature/library/entity/library.entity';
import { Editorial } from 'src/feature/editorial/entities/editorial.entity';

@Entity()
export class Book implements BookModel {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property({ type: 'string' })
  title: string;

  @ManyToOne(() => Author)
  author: Author;

  @ManyToMany(() => Library,null, { nullable: true })
  @Exclude()
  libraries: Collection<Library> = new Collection<Library>(this);

  @ManyToMany(() => Editorial, null, { nullable: true })
  @Exclude()
  editorials: Collection<Editorial> = new Collection<Editorial>(this);
  
  @Property()
  year: number;

  @Property()
  @Exclude()
  genre: string;

  @Property()
  editorial: string;

  @BeforeCreate()
  @BeforeDelete()
  @BeforeUpdate()
  getNowYear() {
    this.year = new Date().getFullYear();
  }
}