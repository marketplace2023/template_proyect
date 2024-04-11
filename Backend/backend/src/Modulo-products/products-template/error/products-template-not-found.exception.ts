import { NotFoundException } from '@nestjs/common';

export class ProductsTemplateNotFoundException extends NotFoundException {
  constructor() {
    super('Products-template no encontrado');
  }
}
