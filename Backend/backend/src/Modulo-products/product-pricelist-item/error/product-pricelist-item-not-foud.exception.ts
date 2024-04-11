import { NotFoundException } from '@nestjs/common';

export class ProductPricelistItemNotFoundException extends NotFoundException {
  constructor() {
    super('Product Pricelist Item no encontrado');
  }
}
