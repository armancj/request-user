import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    const user = this.user[id];

    if (!user) throw new NotFoundException('user not found');

    return user;
  }

  delete(id: number) {
    const u = this.findOne(id);

    this.user = this.user.filter(
      (value) => value.edad !== u.edad && value.name !== u.name,
    );

    return { mensage: 'delete successfully' };
  }
}
