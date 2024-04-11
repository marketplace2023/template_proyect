import { NotFoundException } from '@nestjs/common';

export class AccountInvoiceLineNotFoundException extends NotFoundException {
  constructor() {
    super('Account Invoice Line no encontrado');
  }
}
