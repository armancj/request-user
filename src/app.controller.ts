import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Hello word' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  @ApiOkResponse({ type: [User] })
  findAllUser() {
    return this.appService.findAllUser();
  }

  @Post('/user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.appService.create(createUserDto);
  }
}
