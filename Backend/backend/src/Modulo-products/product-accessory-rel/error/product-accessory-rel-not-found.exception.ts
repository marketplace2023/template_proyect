import { NotFoundException } from '@nestjs/common';

export class ProductAccessoryRelNotFoundException extends NotFoundException {
  constructor() {
    super('Product Accessory Rel no encontrado');
  }
}
