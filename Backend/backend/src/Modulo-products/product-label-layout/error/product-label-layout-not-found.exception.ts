import { NotFoundException } from '@nestjs/common';

export class ProductLabelLayoutNotFoundException extends NotFoundException {
  constructor() {
    super('Producto Imagen no encontrado');
  }
}
