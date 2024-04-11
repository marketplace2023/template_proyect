import { NotFoundException } from '@nestjs/common';

export class PaymentOrderNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Orderd no encontrado');
  }
}
