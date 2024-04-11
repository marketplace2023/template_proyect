import { NotFoundException } from '@nestjs/common';

export class ProductTagNotFoundException extends NotFoundException {
  constructor() {
    super('Product no encontrado');
  }
}
