import { NotFoundException } from '@nestjs/common';

export class SaleCommissionNotFoundException extends NotFoundException {
  constructor() {
    super('sale Commission no encontrado');
  }
}
