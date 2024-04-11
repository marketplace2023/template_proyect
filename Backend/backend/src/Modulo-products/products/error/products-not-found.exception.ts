import { NotFoundException } from '@nestjs/common';

export class ProductsNotFoundException extends NotFoundException {
  constructor() {
    super('Producto no encontrado');
  }
}
