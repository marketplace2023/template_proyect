import { NotFoundException } from '@nestjs/common';

export class ProductsAttributevalueNotFoundException extends NotFoundException {
  constructor() {
    super('Products-attributes-value no encontrado');
  }
}
