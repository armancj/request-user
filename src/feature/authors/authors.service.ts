import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { Author } from './entity/author.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: EntityRepository<Author>,
    private readonly em: EntityManager,
    private readonly userService: UserService,
  ) {}

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const { userId, ...authorDto } = createAuthorDto;

    const user = await this.findUser(userId);
    const author = this.authorRepository.create({ ...authorDto, user });

    await this.em.persistAndFlush(author);
    return author;
  }

  async getAllAuthors(): Promise<Author[]> {
    return await this.authorRepository.findAll();
  }

  async getAuthorById(id: number): Promise<Author> {
    const author = await this.authorRepository.findOne(
      { id },
      { populate: ['user'] },
    );

    if (!author)
      throw new HttpException('author is not found', HttpStatus.NOT_FOUND);

    return author;
  }

  async updateAuthor(
    id: number,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<{ message: string }> {
    await this.getAuthorById(id);

    const { userId, ...authorDto } = updateAuthorDto;
    const author: Partial<Author> = { ...authorDto };

    if (userId) author.user = await this.findUser(userId);

    await this.authorRepository.nativeUpdate({ id }, author);

    return { message: 'the author is modify' };
  }

  async deleteAuthor(id: number): Promise<{ message: string }> {
    await this.getAuthorById(id);
    await this.authorRepository.nativeDelete({ id });
    return { message: 'the author is delete' };
  }

  private async findUser(userId: number) {
    return this.userService.findOne(userId);
  }
}
