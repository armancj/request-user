import { NotFoundException } from '@nestjs/common';

export class NotFoundLibraryExceptionDto extends NotFoundException {
  constructor() {
    super('library not found');
  }
}
