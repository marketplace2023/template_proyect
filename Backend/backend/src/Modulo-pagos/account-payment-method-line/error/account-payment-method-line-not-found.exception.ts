import { NotFoundException } from '@nestjs/common';

export class AccountPaymentMethodLineNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Method Lineno encontrado');
  }
}
