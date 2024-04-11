import { NotFoundException } from '@nestjs/common';

export class ProductRibbonNotFoundException extends NotFoundException {
  constructor() {
    super('Product Ribbon no encontrado');
  }
}
