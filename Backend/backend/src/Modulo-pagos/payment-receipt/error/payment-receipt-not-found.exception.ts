import { NotFoundException } from '@nestjs/common';

export class PaymentReceiptNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Receipt no encontrado');
  }
}
