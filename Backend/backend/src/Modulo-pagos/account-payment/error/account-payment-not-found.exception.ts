import { NotFoundException } from '@nestjs/common';

export class AccountPaymentdNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment no encontrado');
  }
}
