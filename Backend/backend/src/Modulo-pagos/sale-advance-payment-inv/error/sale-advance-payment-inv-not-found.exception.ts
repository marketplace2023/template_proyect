import { NotFoundException } from '@nestjs/common';

export class SaleAdvancePaymentInvNotFoundException extends NotFoundException {
  constructor() {
    super('Sale Advance Payment Inv no encontrado');
  }
}
