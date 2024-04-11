import { NotFoundException } from '@nestjs/common';

export class PaymentTokenNotFoundException extends NotFoundException {
  constructor() {
    super('Payment no encontrado');
  }
}
