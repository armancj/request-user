import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { UpdateEditorialDto } from './dto/update-editorial.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Editorial } from './entities/editorial.entity';
import { EntityManager, EntityRepository, FindOneOptions, LoadHint, Populate } from '@mikro-orm/core';
import { promises } from 'dns';

@Injectable()
export class EditorialService {
  constructor(
    @InjectRepository(Editorial)
    private readonly editorialEntityRepository:EntityRepository<Editorial>,
    private readonly em: EntityManager,
  ){}
  
  async create(createEditorialDto: CreateEditorialDto):Promise<Editorial> {
    const {...editorialDto} = createEditorialDto

    const editorial= this.editorialEntityRepository.create({
      ...editorialDto,
    });
    await this.em.persistAndFlush(editorial);
    return editorial;
  }

  findAll(): Promise<Editorial[]> {
    return this.editorialEntityRepository.findAll()
  }

  async findOne(id: number): Promise<Editorial> {
   const editorial= await this.editorialEntityRepository.findOne({id});
    if (!editorial) {
      throw new NotFoundException('editorial not found');
    }
    return editorial;
  }
  
  async getEditorialById(id: number): Promise<Editorial> {
      const editorial = await this.editorialEntityRepository.findOne(
        { id },
      );
  
      if (!editorial)
        throw new HttpException('author is not found', HttpStatus.NOT_FOUND);
  
      return editorial;
    }

  async update(id: number, updateEditorialDto: UpdateEditorialDto) {
    await this.findOne(id)
    await this.editorialEntityRepository.nativeUpdate({id},updateEditorialDto);
    return {Message: 'Updated succesfully'};
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.editorialEntityRepository.nativeDelete({id})
    return {message: 'Delete ok'};
  }
}
