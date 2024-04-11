import { NotFoundException } from '@nestjs/common';

export class SaleOrderPaymentNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Order Payment no encontrado');
  }
}
