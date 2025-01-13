import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { Library } from './entity/library.entity';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { CreateLibraryDto } from './dto/create-library.dto';
import { NotFoundLibraryExceptionDto } from './dto/not-found-library-exception.dto';

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
    const library = await this.libraryRepository.findOne({ id });
    if (!library) throw new NotFoundLibraryExceptionDto();
    return library;
  }

  async create(libraryData: CreateLibraryDto): Promise<Library> {
    const library = this.libraryRepository.create(libraryData);
    await this.em.persistAndFlush(library);
    return library;
  }

  async update(
    id: number,
    libraryData: UpdateLibraryDto,
  ): Promise<Library | null> {
    const library = await this.findOne(id);

    const newLibrary: Library = libraryData as Library;

    this.libraryRepository.assign(library, newLibrary);
    await this.em.flush();
    return library;
  }

  async delete(id: number): Promise<boolean> {
    const library = await this.findOne(id);
    await this.em.removeAndFlush(library);
    return true;
  }
}
