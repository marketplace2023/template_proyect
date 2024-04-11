import { NotFoundException } from '@nestjs/common';

export class PaymentAcquirerNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Acquirer no encontrado');
  }
}
