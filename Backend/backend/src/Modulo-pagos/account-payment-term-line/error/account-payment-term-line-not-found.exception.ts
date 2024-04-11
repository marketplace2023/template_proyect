import { NotFoundException } from '@nestjs/common';

export class AccountPaymentTermLineNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Term Line no encontrado');
  }
}
