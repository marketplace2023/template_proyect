import { NotFoundException } from '@nestjs/common';

export class PaymentTransactionNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Transaction no encontrado');
  }
}
