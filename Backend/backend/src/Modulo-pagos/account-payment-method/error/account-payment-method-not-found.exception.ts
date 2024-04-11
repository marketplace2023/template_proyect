import { NotFoundException } from '@nestjs/common';

export class AccountPaymentMethodNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Method no encontrado');
  }
}
