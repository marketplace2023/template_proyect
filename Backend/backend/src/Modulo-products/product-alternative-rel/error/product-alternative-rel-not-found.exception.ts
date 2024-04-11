import { NotFoundException } from '@nestjs/common';

export class ProductAlternativeRelNotFoundException extends NotFoundException {
  constructor() {
    super('Product Alternative Rel no encontrado');
  }
}
