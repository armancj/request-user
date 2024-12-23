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
  findAll() {
    return this.userService.findAllUser();
  }

  @Get('/:id')
  @ApiOkResponse({ type: User })
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOkResponse({ type: User })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete('/:id')
  @ApiOkResponse()
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
