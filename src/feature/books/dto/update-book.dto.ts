import { PartialType } from '@nestjs/swagger';
import { CreateBook } from './create-book.dto';

export class UpdateBook extends PartialType(CreateBook) {}
