import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AppService {
  private user: User[] = [{ edad: 64, name: 'mandi' }];
  getHello(): string {
    return 'Hello World!';
  }

  findAllUser(): User[] {
    return this.user;
  }

  create(createUserDto: CreateUserDto) {
    this.user.push(createUserDto);
    return createUserDto;
  }
}
