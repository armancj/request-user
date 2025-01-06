import { Injectable } from '@nestjs/common';
import { Library } from './library.entity';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@Injectable()
export class LibraryService {
  private libraries: Library[] = [];
  private idCounter = 1;

  findAll(): Library[] {
    return this.libraries;
  }

  findOne(id: number): Library {
    const library = this.libraries.find(library => library.id === id);
    if (!library) {
      throw new Error(`Library with ID ${id} not found`);
    }
    return library;
  }

  create(createLibraryDto: CreateLibraryDto): Library {
    const newLibrary: Library = {
      id: this.idCounter++,
      ...createLibraryDto,
    };
    this.libraries.push(newLibrary);
    return newLibrary;
  }

  update(id: number, updateLibraryDto: UpdateLibraryDto): Library {
    const library = this.findOne(id);
    if (!library) return null;

    Object.assign(library, updateLibraryDto);
    return library;
  }

  delete(id: number): boolean {
    const index = this.libraries.findIndex(library => library.id === id);
    if (index === -1) return false;

    this.libraries.splice(index, 1);
    return true;
  }
}