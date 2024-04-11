import { NotFoundException } from '@nestjs/common';

export class SaleShopNotFoundException extends NotFoundException {
  constructor() {
    super('sale Shop no encontrado');
  }
}
