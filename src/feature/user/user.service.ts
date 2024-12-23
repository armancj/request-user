import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as console from 'console';


@Injectable()
export class UserService {
  private users: User[] = [{
    id: 1, edad: 60, name: 'mandi'
  }];


  findAllUser(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      id: this.users.length + 1
    }
    this.users.push(user);
    return createUserDto;
  }

  findOne(id: number) {
     const user = this.users[id-1]

    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  delete(id: number) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) { throw new NotFoundException(`User with ID ${id} not found`); }

    this.users.splice(index, 1);

    return { mensage: 'delete successfully' };
  }
}
