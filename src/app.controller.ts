import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {

  @ApiOkResponse({ description: 'Hello word' })
  @Get()
  getHello(): string {
    return 'Hello World!';
  }


}
