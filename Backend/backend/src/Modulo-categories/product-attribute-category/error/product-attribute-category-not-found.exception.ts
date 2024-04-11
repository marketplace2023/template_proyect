import { NotFoundException } from '@nestjs/common';

export class ProductAttributeCategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Producto Attribute Category no encontrado');
  }
}
