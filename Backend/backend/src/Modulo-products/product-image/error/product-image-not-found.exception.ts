import { NotFoundException } from '@nestjs/common';

export class ProductImageNotFoundException extends NotFoundException {
  constructor() {
    super('Producto Imagen no encontrado');
  }
}
