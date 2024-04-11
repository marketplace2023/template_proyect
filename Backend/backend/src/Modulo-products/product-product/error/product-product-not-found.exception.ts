import { NotFoundException } from '@nestjs/common';

export class ProductProductNotFoundException extends NotFoundException {
  constructor() {
    super('ProductProduct no encontrado');
  }
}
