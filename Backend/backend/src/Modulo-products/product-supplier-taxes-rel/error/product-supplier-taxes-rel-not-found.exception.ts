import { NotFoundException } from '@nestjs/common';

export class ProductSupplierTaxesRelNotFoundException extends NotFoundException {
  constructor() {
    super('Product no encontrado');
  }
}
