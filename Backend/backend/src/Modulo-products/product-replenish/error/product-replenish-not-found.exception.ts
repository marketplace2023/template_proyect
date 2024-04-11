import { NotFoundException } from '@nestjs/common';

export class ProductReplenishNotFoundException extends NotFoundException {
  constructor() {
    super('Product Replenish no encontrado');
  }
}
