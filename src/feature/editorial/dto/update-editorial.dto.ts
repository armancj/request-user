import { PartialType } from '@nestjs/swagger';
import { CreateEditorialDto } from './create-editorial.dto';

export class UpdateEditorialDto extends PartialType(CreateEditorialDto) {}
