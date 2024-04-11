import { NotFoundException } from '@nestjs/common';

export class PaymentIconNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Icon no encontrado');
  }
}
