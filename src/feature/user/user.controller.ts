import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @ApiOkResponse({ type: [User] })
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Get('/:id')
  finOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
