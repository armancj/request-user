import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './model/user.model';
import * as console from 'console';


@Injectable()
export class UserService {
  private users: UserModel[] = [];


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
    const user = this.users[id+1];

    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  delete(id: number) {
    this.findOne(id);

    const user = this.users.map(user =>{
       if(user.id !== id) return user;
    }
    )

    console.log({user})

    this.users = user;

    return { mensage: 'delete successfully' };
  }
}
