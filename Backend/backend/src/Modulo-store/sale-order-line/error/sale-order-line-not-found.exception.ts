import { NotFoundException } from '@nestjs/common';

export class SaleOrderLineNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Order Line no encontrado');
  }
}
