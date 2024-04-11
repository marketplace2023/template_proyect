import { NotFoundException } from '@nestjs/common';

export class AccountPaymentRegisterMoveLineRelNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Register Move Line Rel no encontrado');
  }
}
