import { NotFoundException } from '@nestjs/common';

export class AccountPaymentGroupNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Group no encontrado');
  }
}
