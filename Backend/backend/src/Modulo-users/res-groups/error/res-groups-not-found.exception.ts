import { NotFoundException } from '@nestjs/common';

export class ResGroupsNotFoundException extends NotFoundException {
  constructor() {
    super('Users groups no encontrado');
  }
}
