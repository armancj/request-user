import { Author } from '../../authors/entity/author.entity';

export interface BookModel {
  id: number;
  title: string;
  author: Author;
  year: number;
  genre: string;
  editorial: string;
}
