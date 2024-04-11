import { NotFoundException } from '@nestjs/common';

export class AccountPaymentTermNotFoundException extends NotFoundException {
  constructor() {
    super('Account Payment Term no encontrado');
  }
}
