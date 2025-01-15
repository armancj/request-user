import { Collection } from '@mikro-orm/core';
import { Author } from '../../authors/entity/author.entity';
import { Library } from 'src/feature/library/entity/library.entity';

export interface BookModel {
  id: number;
  title: string;
  author?: Author;
  year: number;
  genre: string;
  editorial: string;
  libraries?: Collection<Library>;
}
