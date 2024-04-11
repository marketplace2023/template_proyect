import { NotFoundException } from '@nestjs/common';

export class ProductsSupplierNotFoundException extends NotFoundException {
  constructor() {
    super('Products-supplier no encontrado');
  }
}
