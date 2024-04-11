import { NotFoundException } from '@nestjs/common';

export class ProductsAttributeNotFoundException extends NotFoundException {
  constructor() {
    super('Products-attributes no encontrado');
  }
}
