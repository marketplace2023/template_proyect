import { NotFoundException } from '@nestjs/common';

export class PaymentMethodNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Method no encontrado');
  }
}
