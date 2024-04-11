import { NotFoundException } from '@nestjs/common';

export class PaymentProviderNotFoundException extends NotFoundException {
  constructor() {
    super('Payment no encontrado');
  }
}
