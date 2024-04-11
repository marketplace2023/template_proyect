import { NotFoundException } from '@nestjs/common';

export class PosCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('pos category no encontrado');
  }
}
