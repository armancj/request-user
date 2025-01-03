import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      edad: 60,
      name: 'mandi',
    },
  ];

  findAllUser(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      id: this.users.length + 1,
    };
    this.users.push(user);
    return user;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = { ...this.users[userIndex], ...updateUserDto };
    this.users[userIndex] = updatedUser;

    return updatedUser;
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === Number(id));

    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.users.splice(index, 1);

    return { message: 'Deleted successfully' };
  }
}
