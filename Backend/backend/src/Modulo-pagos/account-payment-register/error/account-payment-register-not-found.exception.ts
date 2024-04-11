import { NotFoundException } from '@nestjs/common';

export class AccountPaymentRegisterNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment register no encontrado');
  }
}
