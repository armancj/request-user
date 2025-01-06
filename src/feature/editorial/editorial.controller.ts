import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { UpdateEditorialDto } from './dto/update-editorial.dto';

@Controller('editorial')
export class EditorialController {
  constructor(private readonly editorialService: EditorialService) {}

  @Post()
  create(@Body() createEditorialDto: CreateEditorialDto) {
    return this.editorialService.create(createEditorialDto);
  }

  @Get()
  findAll() {
    return this.editorialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.editorialService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEditorialDto: UpdateEditorialDto,
  ) {
    return this.editorialService.update(+id, updateEditorialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.editorialService.remove(+id);
  }
}
