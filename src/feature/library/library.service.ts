import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { Library } from './library.entity';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepository: EntityRepository<Library>,
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Library[]> {
    return this.libraryRepository.findAll();
  }

  async findOne(id: number): Promise<Library | null> {
    return this.libraryRepository.findOne({ id });
  }

  async create(libraryData: Partial<Library>): Promise<Library> {
    const library = this.libraryRepository.create(libraryData);
    await this.em.persistAndFlush(library); 
    return library;
  }

  async update(id: number, libraryData: Partial<Library>): Promise<Library | null> {
    const library = await this.findOne(id);
    if (!library) return null;

    this.libraryRepository.assign(library, libraryData);
    await this.em.flush();  
    return library;
  }

  async delete(id: number): Promise<boolean> {
    const library = await this.findOne(id);
    if (!library) return false;

    await this.em.removeAndFlush(library); 
    return true;
  }
}