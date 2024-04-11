import { NotFoundException } from '@nestjs/common';

export class SaleOrderNotFoundException extends NotFoundException {
  constructor() {
    super('SaleOrder no encontrado');
  }
}
