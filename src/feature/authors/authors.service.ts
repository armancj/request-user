import { Injectable } from '@nestjs/common';
import { Author } from './author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [];
  private idCounter = 1;

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number): Author {
    return this.authors.find(author => author.id === id);
  }

  create(createAuthorDto: CreateAuthorDto): Author {
    const newAuthor: Author = {
      id: this.idCounter++,
      ...createAuthorDto,
    };
    this.authors.push(newAuthor);
    return newAuthor;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto): Author {
    const author = this.findOne(id);
    if (!author) return null;

    Object.assign(author, updateAuthorDto);
    return author;
  }

  delete(id: number): boolean {
    const index = this.authors.findIndex(author => author.id === id);
    if (index === -1) return false;

    this.authors.splice(index, 1);
    return true;
  }
}
