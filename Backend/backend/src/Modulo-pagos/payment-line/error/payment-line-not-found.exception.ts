import { NotFoundException } from '@nestjs/common';

export class PaymentLineNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Line no encontrado');
  }
}
