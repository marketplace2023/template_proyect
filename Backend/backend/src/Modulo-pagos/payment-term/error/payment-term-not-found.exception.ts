import { NotFoundException } from '@nestjs/common';

export class PaymentTermNotFoundException extends NotFoundException {
  constructor() {
    super('Payment Term no encontrado');
  }
}
