import { NotFoundException } from '@nestjs/common';

export class ResGroupsDeleteNotFoundException extends NotFoundException {
  constructor() {
    super('Groups eliminado');
  }
}
