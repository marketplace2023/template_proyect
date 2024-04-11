import { NotFoundException } from '@nestjs/common';

export class ProductSupplierinfoNotFoundException extends NotFoundException {
  constructor() {
    super('Product no encontrado');
  }
}
