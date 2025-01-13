import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  constructor(private readonly em: EntityManager) {}

  async createAuthor(name: string, bio: string): Promise<Author> {
    const author = new Author();
    author.name = name;
    author.bio = bio;

    await this.em.persistAndFlush(author); // Guarda el autor en la DB
    return author;
  }

  async getAllAuthors(): Promise<Author[]> {
    return await this.em.find(Author, {}); // Devuelve todos los autores
  }

  async getAuthorById(id: number): Promise<Author | null> {
    return await this.em.findOne(Author, { id });
  }

  async updateAuthor(id: number, name: string, bio: string): Promise<Author | null> {
    const author = await this.em.findOne(Author, { id });
    if (!author) return null;

    author.name = name;
    author.bio = bio;

    await this.em.persistAndFlush(author); // Actualiza los datos
    return author;
  }

  async deleteAuthor(id: number): Promise<boolean> {
    const author = await this.em.findOne(Author, { id });
    if (!author) return false;

    await this.em.removeAndFlush(author); // Elimina el autor
    return true;
  }
}
