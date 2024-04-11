import { NotFoundException } from '@nestjs/common';

export class ProductTaxesRelNotFoundException extends NotFoundException {
  constructor() {
    super('Product no encontrado');
  }
}
